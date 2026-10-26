-- Portable SQL (runs on SQLite and PostgreSQL). Timestamps are ISO-8601 UTC strings;
-- every table that is aggregated by date also stores a plain "YYYY-MM-DD" day column.
-- JSON documents are stored as TEXT.

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  password_hash TEXT,
  google_sub TEXT UNIQUE,
  role TEXT NOT NULL DEFAULT 'learner',
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL,
  created_day TEXT NOT NULL,
  last_login_at TEXT,
  login_count INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_users_created_day ON users (created_day);
CREATE INDEX idx_users_role ON users (role);

CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  user_agent TEXT
);
CREATE INDEX idx_sessions_user ON sessions (user_id);
CREATE INDEX idx_sessions_expires ON sessions (expires_at);

CREATE TABLE courses (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Language and Speech',
  level TEXT NOT NULL DEFAULT '',
  cover_theme TEXT NOT NULL DEFAULT 'blue',
  est_minutes INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft',
  created_by TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  published_at TEXT,
  revision INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX idx_courses_status ON courses (status);

CREATE TABLE units (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  objectives TEXT NOT NULL DEFAULT '[]'
);
CREATE INDEX idx_units_course ON units (course_id, position);

CREATE TABLE lessons (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  unit_id TEXT NOT NULL REFERENCES units (id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  outcomes TEXT NOT NULL DEFAULT '[]'
);
CREATE INDEX idx_lessons_unit ON lessons (unit_id, position);

CREATE TABLE lesson_sessions (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL REFERENCES lessons (id) ON DELETE CASCADE,
  position INTEGER NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT ''
);
CREATE INDEX idx_lesson_sessions_lesson ON lesson_sessions (lesson_id, position);

-- Every learner-visible step. "seq" is the linear order across the whole course.
CREATE TABLE items (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  unit_id TEXT NOT NULL REFERENCES units (id) ON DELETE CASCADE,
  lesson_id TEXT REFERENCES lessons (id) ON DELETE CASCADE,
  session_id TEXT REFERENCES lesson_sessions (id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  seq INTEGER NOT NULL,
  title TEXT NOT NULL,
  est_minutes INTEGER NOT NULL DEFAULT 0,
  body TEXT NOT NULL DEFAULT '{}'
);
CREATE INDEX idx_items_course_seq ON items (course_id, seq);

CREATE TABLE enrollments (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'active',
  enrolled_at TEXT NOT NULL,
  enrolled_day TEXT NOT NULL,
  last_activity_at TEXT,
  completed_at TEXT,
  completed_day TEXT,
  total_seconds INTEGER NOT NULL DEFAULT 0,
  items_done INTEGER NOT NULL DEFAULT 0,
  items_total INTEGER NOT NULL DEFAULT 0,
  UNIQUE (user_id, course_id)
);
CREATE INDEX idx_enrollments_course ON enrollments (course_id, status);
CREATE INDEX idx_enrollments_day ON enrollments (enrolled_day);
CREATE INDEX idx_enrollments_activity ON enrollments (last_activity_at);

CREATE TABLE item_progress (
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  item_id TEXT NOT NULL REFERENCES items (id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  first_seen_at TEXT NOT NULL,
  completed_at TEXT,
  seconds INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, item_id)
);
CREATE INDEX idx_item_progress_item ON item_progress (item_id);
CREATE INDEX idx_item_progress_course ON item_progress (course_id, user_id);

-- Time on task, one row per learner / course / day (upserted by heartbeats).
CREATE TABLE activity_daily (
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  day TEXT NOT NULL,
  seconds INTEGER NOT NULL DEFAULT 0,
  items_done INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, course_id, day)
);
CREATE INDEX idx_activity_day ON activity_daily (day);
CREATE INDEX idx_activity_course_day ON activity_daily (course_id, day);

CREATE TABLE quiz_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  item_id TEXT NOT NULL REFERENCES items (id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  option_id TEXT NOT NULL,
  correct INTEGER NOT NULL,
  attempt_no INTEGER NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX idx_quiz_user_item ON quiz_attempts (user_id, item_id, question_id);
CREATE INDEX idx_quiz_item ON quiz_attempts (item_id, question_id, attempt_no);

CREATE TABLE assessment_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  item_id TEXT NOT NULL REFERENCES items (id) ON DELETE CASCADE,
  answers TEXT NOT NULL,
  score REAL NOT NULL,
  rating TEXT NOT NULL,
  passed INTEGER NOT NULL,
  result TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX idx_assess_user_item ON assessment_attempts (user_id, item_id, created_at);
CREATE INDEX idx_assess_item ON assessment_attempts (item_id);

CREATE TABLE notes (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  item_id TEXT NOT NULL REFERENCES items (id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX idx_notes_user_item ON notes (user_id, item_id);
CREATE INDEX idx_notes_user_course ON notes (user_id, course_id, updated_at);

CREATE TABLE ai_messages (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  course_id TEXT NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
  item_id TEXT NOT NULL REFERENCES items (id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX idx_ai_user_item ON ai_messages (user_id, item_id, created_at);
