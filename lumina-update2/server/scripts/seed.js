import { pathToFileURL } from 'node:url';
// Creates the first administrator and loads the English course (Units 1–3). Safe to run repeatedly.
import { config } from '../config.js';
import { openDb, migrate } from '../db/index.js';
import { hashPassword } from '../lib/crypto.js';
import { uid, nowIso, dayOf } from '../lib/util.js';
import { createCourse, sanitizeTree, publishProblems } from '../services/courseTree.js';
import { englishCourse, ENGLISH_COURSE_SLUG } from '../content/english/index.js';

export async function seed(db, cfg = config, { quiet = false } = {}) {
  const log = quiet ? () => {} : console.log;
  const admin = await db.get('SELECT id FROM users WHERE email = ?', [cfg.adminEmail]);
  let adminId = admin?.id;
  if (!adminId) {
    adminId = uid();
    const at = nowIso();
    await db.run(
      'INSERT INTO users (id, email, name, password_hash, role, status, created_at, created_day) VALUES (?,?,?,?,?,?,?,?)',
      [adminId, cfg.adminEmail, 'Platform Admin', await hashPassword(cfg.adminPassword), 'admin', 'active', at, dayOf(at)],
    );
    log(`Created admin ${cfg.adminEmail}`);
  }

  let course = await db.get('SELECT id, slug FROM courses WHERE title = ?', [englishCourse.meta.title]);
  if (!course) {
    const tree = sanitizeTree(englishCourse);
    const problems = publishProblems(tree);
    if (problems.length) throw new Error(`Seed content has problems:\n- ${problems.join('\n- ')}`);
    course = await createCourse(db, { title: englishCourse.meta.title, userId: adminId, tree: englishCourse });
    await db.run("UPDATE courses SET status = 'published', published_at = ? WHERE id = ?", [nowIso(), course.id]);
    log(`Loaded course "${englishCourse.meta.title}" (${course.slug})`);
  }
  return { adminId, courseId: course.id, slug: course.slug };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const db = await openDb(config.databaseUrl);
  await migrate(db);
  await seed(db);
  if (config.adminPassword === 'ChangeMe!2026') console.log('\n  ⚠  Using the default admin password. Set ADMIN_PASSWORD in .env before sharing this site.\n');
  await db.close();
}
