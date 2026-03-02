CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  default_name VARCHAR(50) NOT NULL UNIQUE,
  default_description TEXT
  );

CREATE TABLE IF NOT EXISTS criterion (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  category_id INTEGER REFERENCES category(id),
  default_name VARCHAR(255) NOT NULL UNIQUE,
  default_description TEXT,
  UNIQUE(category_id, default_name)
  );

CREATE INDEX IF NOT EXISTS idx_criterion_category_id ON criterion(category_id);

CREATE TABLE IF NOT EXISTS criterion_value (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  criterion_id INTEGER REFERENCES criterion(id),
  value INTEGER NOT NULL,
  default_label VARCHAR(255) NOT NULL,
  UNIQUE (criterion_id, value, default_label)
  );

CREATE INDEX IF NOT EXISTS idx_criterion_value_criterion_id ON criterion_value(criterion_id);
