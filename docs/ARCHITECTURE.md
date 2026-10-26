# Architecture and scaling notes

**Shape.** One stateless Node process serves the API and the built React app. State lives in the database, so you can run many copies behind a load balancer.

**Database.** SQLite is fine for development and small launches. For real traffic move to PostgreSQL (`DATABASE_URL`); the SQL is written to be portable, but run the test suite against Postgres before relying on it. Add a read replica for the admin analytics when needed.

**Sessions.** Random tokens stored hashed in the `sessions` table, sent in an httpOnly cookie. Mutating requests need the `X-Requested-With: lumina` header (CSRF defence).

**Rate limiting.** In-memory per process. With several instances, move it to Redis or the load balancer.

**Analytics.** Dashboards read compact daily rollups (`activity_daily`, `enrollments`) and cache results for 60 seconds. At large scale, pre-compute these in a scheduled job and keep the learner request path write-light (heartbeats are batched every 15 s).

**Heavy work.** AI answers call an external API with a timeout and fall back to the local helper. Move them to a queue or worker if volume grows.

**Video.** Videos are linked (YouTube, Vimeo or an https MP4). Put real hosting behind a CDN.

**Security.** scrypt password hashing, Google ID tokens verified against Google's keys, strict CSP, no raw HTML rendering of content, graded answers never sent to the browser before submission.

**Before launch.** Set HTTPS and `PUBLIC_URL`, change the admin password, add backups, error monitoring, email verification and password reset, and have the course team review the content and record the videos.
