import { pathToFileURL } from 'node:url';
// Fills the database with SYNTHETIC learners and activity so the admin dashboards have something to show.
// All demo accounts use @demo.lumina.local and can be removed with:  npm run seed:demo -- --clear
// Never run this against a production database.
import { config } from '../config.js';
import { openDb, migrate } from '../db/index.js';
import { seed } from './seed.js';
import { addDays, today, uid, safeJson } from '../lib/util.js';
import { gradeAssessment } from '../services/grading.js';
import { clearAnalyticsCache } from '../services/analytics.js';
import { englishCourse } from '../content/english/index.js';

const DOMAIN = '@demo.lumina.local';
const FIRST = 'Amira Bo Chen Dmitri Elena Farid Grace Hiro Ines Jun Kofi Lena Mateo Nadia Omar Priya Qi Rosa Sven Tara Umar Vera Wei Xin Yusuf Zara Ana Ben Chloe Dev Emi Fatima Gus Hana Ivan Jia Kai Lara Min Noor'.split(' ');
const LAST = 'Ahmed Kim Li Garcia Novak Singh Okafor Tanaka Silva Cohen Ito Nguyen Rossi Haddad Park Chen Ali Mendes Larsen Wang Khan Moreau Zhang Lopez Sato'.split(' ');

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export async function seedDemo(db, { learners = 160, days = 90, quiet = false } = {}) {
  const log = quiet ? () => {} : console.log;
  const R = rng(20261025);
  const pick = (a) => a[Math.floor(R() * a.length)];
  const info = await seed(db, config, { quiet: true });
  const items = (await db.all('SELECT id, kind, unit_id, body, est_minutes FROM items WHERE course_id = ? ORDER BY seq', [info.courseId])).map((i) => ({ ...i, body: safeJson(i.body, {}) }));
  const total = items.length;
  const fullAssess = Object.fromEntries(englishCourse.units.map((u) => [u.assessment.id, u.assessment.body]));
  const t0 = today();

  await db.tx(async (t) => {
    for (let n = 0; n < learners; n++) {
      // More recent sign-ups than old ones (growth).
      const age = Math.floor(days * (1 - Math.sqrt(R())));
      const created = addDays(t0, -age);
      const uidv = uid();
      const name = `${pick(FIRST)} ${pick(LAST)}`;
      const createdAt = `${created}T${String(8 + Math.floor(R() * 12)).padStart(2, '0')}:${String(Math.floor(R() * 60)).padStart(2, '0')}:00.000Z`;
      await t.run('INSERT INTO users (id, email, name, role, status, created_at, created_day, last_login_at, login_count) VALUES (?,?,?,?,?,?,?,?,?)',
        [uidv, `demo${n}${DOMAIN}`, name, 'learner', 'active', createdAt, created, createdAt, 1 + Math.floor(R() * 12)]);
      if (R() < 0.14) continue; // signed up but never enrolled

      const skill = 0.4 + R() * 0.55;       // chance to answer a question right first time
      const persistence = 0.84 + R() * 0.16; // chance to come back the next active day
      let idx = 0, day = created, secondsTotal = 0, lastActive = createdAt, completedDay = null, completedAt = null;
      const enrolledAt = createdAt;
      let maxIdx = R() < 0.1 ? 0 : total; // a few never start
      while (idx < maxIdx && day <= t0) {
        const todays = 3 + Math.floor(R() * 7);
        let daySecs = 0, dayItems = 0;
        for (let k = 0; k < todays && idx < maxIdx; k++, idx++) {
          const it = items[idx];
          const secs = Math.round((it.est_minutes || 3) * 60 * (0.6 + R() * 1.1));
          const at = `${day}T${String(9 + Math.floor(R() * 12)).padStart(2, '0')}:${String(Math.floor(R() * 60)).padStart(2, '0')}:00.000Z`;
          if (at > new Date().toISOString()) { maxIdx = idx; break; }
          let completedHere = true;
          if (it.kind === 'quiz') {
            for (const q of it.body.questions || []) {
              let no = 0, right = false;
              while (!right && no < 3) {
                no += 1;
                right = R() < skill + (no - 1) * 0.25;
                const wrong = q.options.filter((o) => o.id !== q.answer);
                await t.run('INSERT INTO quiz_attempts (id, user_id, course_id, item_id, question_id, option_id, correct, attempt_no, created_at) VALUES (?,?,?,?,?,?,?,?,?)',
                  [uid(), uidv, info.courseId, it.id, q.id, right ? q.answer : pick(wrong).id, right ? 1 : 0, no, at]);
              }
            }
          } else if (it.kind === 'assessment') {
            const body = fullAssess[it.id];
            let passed = false, tries = 0;
            while (!passed && tries < 3) {
              tries += 1;
              const answers = {};
              for (const task of body.tasks) {
                if (task.type === 'written') {
                  const model = task.modelAnswer.split(' ');
                  answers[task.id] = R() < skill + tries * 0.08 ? task.modelAnswer : model.slice(0, Math.floor(model.length * (0.15 + R() * 0.35))).join(' ');
                } else answers[task.id] = R() < skill + tries * 0.08 ? task.answer : pick(task.options.filter((o) => o.id !== task.answer)).id;
              }
              const res = gradeAssessment(body, answers, config);
              passed = res.passed;
              await t.run('INSERT INTO assessment_attempts (id, user_id, course_id, item_id, answers, score, rating, passed, result, created_at) VALUES (?,?,?,?,?,?,?,?,?,?)',
                [uid(), uidv, info.courseId, it.id, JSON.stringify(answers), res.score, res.rating, res.passed ? 1 : 0, JSON.stringify({ score: res.score, rating: res.rating }), at]);
            }
            completedHere = passed;
            if (!passed) { maxIdx = idx; } // stuck at the assessment → drops out
          }
          await t.run('INSERT INTO item_progress (user_id, item_id, course_id, first_seen_at, completed_at, seconds) VALUES (?,?,?,?,?,?)',
            [uidv, it.id, info.courseId, at, completedHere ? at : null, secs]);
          daySecs += secs; secondsTotal += secs; lastActive = at;
          if (completedHere) dayItems += 1; else break;
        }
        if (daySecs) await t.run('INSERT INTO activity_daily (user_id, course_id, day, seconds, items_done) VALUES (?,?,?,?,?)', [uidv, info.courseId, day, daySecs, dayItems]);
        if (idx >= total) { completedDay = day; completedAt = lastActive; break; }
        if (R() > persistence * (idx > total * 0.5 ? 1 : 0.97)) break; // drops out
        day = addDays(day, 1 + Math.floor(R() * (R() < 0.7 ? 2 : 6)));
      }
      const done = Math.min(idx, total);
      await t.run(
        `INSERT INTO enrollments (id, user_id, course_id, status, enrolled_at, enrolled_day, last_activity_at, completed_at, completed_day, total_seconds, items_done, items_total)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
        [uid(), uidv, info.courseId, completedDay ? 'completed' : 'active', enrolledAt, created, lastActive, completedAt, completedDay, secondsTotal, done, total],
      );
    }
  });
  clearAnalyticsCache();
  log(`Added ${learners} synthetic learners (${DOMAIN}) with ${days} days of activity.`);
}

export async function clearDemo(db) {
  await db.run(`DELETE FROM users WHERE email LIKE '%${DOMAIN}'`);
  clearAnalyticsCache();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (config.isProd) {
    console.error('Refusing to add demo data when NODE_ENV=production.');
    process.exit(1);
  }
  const db = await openDb(config.databaseUrl);
  await migrate(db);
  if (process.argv.includes('--clear')) {
    await clearDemo(db);
    console.log('Removed all demo learners.');
  } else {
    await clearDemo(db);
    await seedDemo(db);
  }
  await db.close();
}
