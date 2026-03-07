CREATE TABLE IF NOT EXISTS refs.category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  default_name VARCHAR(50) NOT NULL UNIQUE,
  default_description TEXT
  );

CREATE TABLE IF NOT EXISTS refs.input_type (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS refs.criterion (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_id INTEGER REFERENCES refs.category(id),
  input_type_id INTEGER REFERENCES refs.input_type(id),
  default_name VARCHAR(255) NOT NULL UNIQUE,
  default_description TEXT,
  UNIQUE(category_id, default_name)
  );

CREATE INDEX IF NOT EXISTS idx_criterion_category_id ON refs.criterion(category_id);
CREATE INDEX IF NOT EXISTS idx_criterion_input_type_id ON refs.criterion(input_type_id);

CREATE TABLE IF NOT EXISTS refs.criterion_value (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  criterion_id INTEGER REFERENCES refs.criterion(id),
  value INTEGER NOT NULL,
  default_label VARCHAR(255) NOT NULL,
  UNIQUE (criterion_id, value, default_label)
  );

CREATE INDEX IF NOT EXISTS idx_criterion_value_criterion_id ON refs.criterion_value(criterion_id);

CREATE TABLE IF NOT EXISTS refs.aroma_family (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  default_name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS refs.aroma_subfamily (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  aroma_family_id INTEGER REFERENCES refs.aroma_family(id),
  default_name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE INDEX IF NOT EXISTS idx_aroma_subfamily_aroma_family_id ON refs.aroma_subfamily(aroma_family_id);

CREATE TABLE IF NOT EXISTS refs.aroma (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  aroma_subfamily_id INTEGER REFERENCES refs.aroma_subfamily(id),
  default_name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE INDEX IF NOT EXISTS idx_aroma_aroma_subfamily_id ON refs.aroma(aroma_subfamily_id);
