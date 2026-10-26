# Lumina Learning

An online course platform: learner app, admin console and API. The first course loaded is **English for Life at a U.S. University** (3 units, 12 lessons, about 40 sessions).

## Run it (Windows PowerShell)

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

Default admin (set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env` before seeding): `admin@lumina.local` / `ChangeMe!2026`. Change it before going live.

## Settings (`.env`)

| Name | Purpose |
|---|---|
| `PORT` | Defaults to 4317 |
| `DATABASE_URL` | `sqlite:./data/lumina.db` (default) or a `postgres://` URL (install `pg`; untested so far) |
| `GOOGLE_CLIENT_ID` | Turns on "Continue with Google". Create an OAuth Web client in Google Cloud and add your site URL as an authorised JavaScript origin |
| `OPENAI_API_KEY` | Makes the AI assistant use OpenAI (`OPENAI_MODEL`, default `gpt-4o-mini`). Without it a built-in helper answers from the lesson text |
| `DROPOUT_DAYS` | Days without activity before an unfinished enrolment counts as dropped out (14) |

## What is where

- `server/` API (Node built-ins only), `server/content/english/` the course content, `server/services/` grading, learning, analytics, AI.
- `web/` React app. `scripts/build.js` bundles it into `dist/`.
- Admin console: `/admin` (overview analytics), `/admin/courses` (create, edit, preview, release), `/admin/users`.

## Learning rules

- Quizzes: 1–2 multiple-choice or True/False questions per session, checked instantly with an explanation for every option.
- Unit assessments are rated A+ (95%+), A (90%+), B+ (85%+), B (80%+), C. B or higher passes. Written tasks are scored by a transparent rubric of checks, not by an AI.
- Learning time is counted only while the lesson tab is visible and focused.
