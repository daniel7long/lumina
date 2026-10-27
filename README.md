# Lumina Learning

[![Live demo](https://img.shields.io/badge/LIVE%20DEMO-LUMINA--LEARNING--QZ52.ONRENDER.COM-2ea44f?style=for-the-badge&labelColor=555555)](https://lumina-learning-qz52.onrender.com)

The next generation of the Open Learning Initiative (OLI) platform at Carnegie Mellon University. Lumina is a self-paced online course platform: a learner app, an admin console and an API, built on the science of learning. It is designed for a catalogue of 100+ courses and a user base of 350,000+ learners.

Nine courses are included today, from English and Python to Psychology and Engineering Statics.

## What learners get

- **Clear learning objectives** at the start of every unit.
- **Instant feedback**: 1–2 quiz questions per session (multiple choice with 3–4 options, or True/False), checked at once with an explanation for every option.
- **Learning by doing**: short sessions with videos, readings, notes and an AI assistant on the page.
- **Progress tracking**: a learning dashboard with progress, time spent and unit ratings.
- **Unit assessments** rated A+ (95%+), A (90%+), B+ (85%+), B (80%+) or C. B or higher passes. Written tasks are scored by a transparent rubric of checks, not by an AI.
- Sign up with email and password, or continue with Google.
- Learning time is counted only while the lesson tab is visible and focused.

## What the public site looks like

- **Landing page** (`/`): hero with the platform's key numbers, a "What makes Lumina courses effective?" section, how a lesson works, and starter courses.
- **Explore courses** (`/courses`): search plus a grid of subject tiles with counts. Pick a subject to filter. Courses load 24 at a time with a "Show more courses" button.
- **Branding**: the CMU wordmark sits above the Lumina logo in the header and footer (`web/assets/cmu-logo.png`). Check CMU brand rules before launching publicly.
- The landing page numbers (100+ courses, 12+ languages, 350,000+ learners) are announced targets, not live counts. Edit them in `web/src/lib/site.js`.

## What admins get

The admin console is at `/admin`.

| Page | What it does |
|---|---|
| `/admin` | Overview analytics: learners, time spent, new learners per day, week and month, dropout numbers and rates, completion rates |
| `/admin/courses` | Create, edit, preview and release courses |
| `/admin/courses/:id` | Course editor: units, lessons, sessions, readings, videos (optional link per session), quizzes and assessments, with a Markdown toolbar and paste-from-Word conversion |
| `/admin/courses/:id/analytics` | Per-course charts and tables |
| `/admin/users` | Account info, courses selected and time spent per user |

Course categories: Language and Speech, Arts & Humanities, Business, Computer Science & Programming, Data Science and Causal Reasoning, Life Sciences, Mathematics and Logic.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19, esbuild, JavaScript/JSX, one plain CSS file, custom SVG charts, custom Markdown renderer |
| Backend | Node.js 22.13+ using only built-ins (`node:http`, `node:crypto`), REST JSON API |
| Database | SQLite (`node:sqlite`) by default; optional PostgreSQL via `pg` (written, untested) |
| Auth | Email and password (scrypt), Google sign-in, httpOnly cookie sessions, CSRF header, rate limiting |
| AI assistant | OpenAI Chat Completions (`gpt-4o-mini` by default), with a built-in lesson helper as fallback |
| Hosting | Render (one web service serves the API and the app) |
| Testing | Node API tests (`npm test`) and Playwright browser checks |

## Run it locally (Windows PowerShell)

Needs Node.js 22.13 or newer.

```powershell
npm install
Copy-Item .env.example .env      # then edit .env
npm run seed                     # creates the admin account and loads the English course
npm run seed:demo                # optional: 160 fake learners so the charts have data
npm run build
npm start                        # http://localhost:4317
```

For development with live rebuilds use `npm run dev`. Run the tests with `npm test`.

Port 4317 is deliberately unusual so Lumina does not clash with other projects on localhost. If you see `EADDRINUSE`, an old server is still running: close its terminal and start again.

### Admin login

Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env` before seeding. Avoid `#` in the password, because `.env` treats it as the start of a comment. If you cannot sign in, reset the password:

```powershell
npm run set-password -- you@example.com "NewPassword9"
```

## Settings

Set these in `.env` locally, or in the Render dashboard under Environment.

| Name | Purpose |
|---|---|
| `PORT` | Defaults to 4317 |
| `NODE_ENV` | `production` on Render |
| `PUBLIC_URL` | The site address. An `https://` address makes cookies Secure |
| `TRUST_PROXY` | Set to `1` behind Render's proxy |
| `DATABASE_URL` | `sqlite:./data/lumina.db` (default), an absolute path such as `sqlite:/var/data/lumina.db`, or a `postgres://` URL (install `pg`) |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | The first admin, created by `npm run seed` |
| `GOOGLE_CLIENT_ID` | Turns on "Continue with Google". Create an OAuth **Web application** client in Google Cloud and add each site address (for example `http://localhost:4317` and your Render `https://` address) as an authorised JavaScript origin |
| `OPENAI_API_KEY` | Makes the AI assistant use OpenAI. Without it a built-in helper answers from the lesson text. The assistant never writes answers for graded assessments |
| `OPENAI_MODEL` | Defaults to `gpt-4o-mini` |
| `DROPOUT_DAYS` | Days without activity before an unfinished enrolment counts as dropped out (14) |
| `SESSION_DAYS`, `RATE_LIMIT_SCALE` | Session length and rate-limit scaling |

Never commit `.env`. It is already in `.gitignore`.

## Deploy on Render

1. Push the project to GitHub. `render.yaml` must be in the repository root.
2. In Render choose **New → Blueprint**, pick the repository and branch `main`.
3. Fill in `PUBLIC_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `GOOGLE_CLIENT_ID` and `OPENAI_API_KEY`, then **Deploy Blueprint**.
4. When the service has its final `https://` address, set `PUBLIC_URL` to it and add it to Google's authorised JavaScript origins.

The build runs `npm install --include=dev && npm run build`, and the start command runs `npm run seed && npm start`, so the admin and the English course exist on every start.

**Free plan limits:** the service sleeps after about 15 minutes idle, and the disk is wiped on every restart or redeploy. That means learner accounts, progress and edits made in the course editor are lost. This is fine for a demo only. For real use, use a paid plan with a persistent disk mounted at `/var/data` and set `DATABASE_URL=sqlite:/var/data/lumina.db`, or use PostgreSQL.

Vercel is not a fit as-is: it is serverless with no persistent disk, and Lumina is a long-running Node server.

## What is where

```
server/             API (Node built-ins only)
  content/          course library: data/ (objectives), one folder per course, builder, index.js
  routes/           HTTP routes
  services/         grading, learning, analytics, course editing, AI
  db/               database adapter and migrations
  scripts/          seed, seed-demo, set-password, migrate
web/
  src/pages/        Public, Dashboard, Player, Admin, Editor
  src/components/   Shell (header, footer, brand), Charts, Calendar, ui
  src/lib/          router, API client, auth, Markdown, site.js (landing numbers)
  assets/           CMU logo
  styles/app.css    all styles
scripts/build.js    esbuild bundler → dist/ (hashed filenames)
tests/              API tests
docs/ARCHITECTURE.md
docs/COURSES.md      course list, added objectives, review caveats
```

## Course model

Course → Unit → Lesson → Session → Item (video, reading or quiz), plus one overview item and one assessment per unit. Each lesson is divided into sessions by content length.

## Course library

Nine courses are included (English, Python, Java, Evidence-Based Management, Probability and Statistics, Modern Biology, Cyber Technology, Engineering Statics, Introduction to Psychology). `npm run seed` loads any course that is not yet in the database, so it is safe to run again after an update.

- `npm run check:content` validates every course (structure, limits, quiz answers).
- To add a course: create `server/content/<name>/`, add its objectives in `server/content/data/<name>.js`, and register it in `server/content/index.js`.
- Categories: Language and Speech, Arts & Humanities, Business, Computer Science & Programming, Data Science and Causal Reasoning, Life Sciences, Mathematics and Logic, Engineering and Technology, Social Sciences.
- Details, and which objectives were added to complete the outlines: `docs/COURSES.md`.

## Known limits

- Course content is authored draft material and needs review by subject experts before real learners use it.
- Videos are transcripts and optional links only. No video files are produced.
- PostgreSQL support is written but untested.
- The catalogue search uses simple text matching, which is fine for hundreds of courses. Add a search index if it grows far beyond that.
