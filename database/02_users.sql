CREATE TABLE IF NOT EXISTS users.role (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name character varying(50) NOT NULL UNIQUE,
);

CREATE TABLE IF NOT EXISTS users.users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name character varying(50) NOT NULL UNIQUE,
  email character varying(255) NOT NULL UNIQUE,
  password_hash text NOT NULL,
  role_id integer NOT NULL UNIQUE REFERENCES users.role(id),
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


CREATE INDEX IF NOT EXISTS idx_users_role_id ON users.users(role_id);
