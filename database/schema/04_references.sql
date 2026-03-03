CREATE TABLE IF NOT EXISTS references.category (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  default_name VARCHAR(50) NOT NULL UNIQUE,
  default_description TEXT
  );

CREATE TABLE IF NOT EXISTS references.input_type (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  name VARCHAR(50) NOT NULL UNIQUE,
  );

CREATE TABLE IF NOT EXISTS references.criterion (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  category_id INTEGER REFERENCES references.category(id),
  input_type_id INTEGER REFERENCES references.input_type(id),
  default_name VARCHAR(255) NOT NULL UNIQUE,
  default_description TEXT,
  UNIQUE(category_id, default_name)
  );

CREATE INDEX IF NOT EXISTS idx_criterion_category_id ON references.criterion(category_id);
CREATE INDEX IF NOT EXISTS idx_criterion_input_type_id ON references.criterion(input_type_id);

CREATE TABLE IF NOT EXISTS references.criterion_value (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  criterion_id INTEGER REFERENCES references.criterion(id),
  value INTEGER NOT NULL,
  default_label VARCHAR(255) NOT NULL,
  UNIQUE (criterion_id, value, default_label)
  );

CREATE INDEX IF NOT EXISTS idx_criterion_value_criterion_id ON references.criterion_value(criterion_id);

CREATE TABLE IF NOT EXISTS references.aroma_family (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  default_name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS references.aroma_subfamily (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  aroma_family_id INTEGER REFERENCES references.aroma_family(id),
  default_name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE INDEX IF NOT EXISTS idx_aroma_subfamily_aroma_family_id ON references.aroma_subfamily(aroma_family_id);

CREATE TABLE IF NOT EXISTS references.aroma (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  aroma_subfamily_id INTEGER REFERENCES references.aroma_subfamily(id),
  default_name VARCHAR(50) NOT NULL UNIQUE
  );

CREATE INDEX IF NOT EXISTS idx_aroma_aroma_subfamily_id ON references.aroma(aroma_subfamily_id);
