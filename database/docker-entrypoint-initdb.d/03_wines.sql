CREATE TABLE IF NOT EXISTS wines.country (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  code CHAR(2) NOT NULL UNIQUE,
  default_name VARCHAR(250) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS wines.region(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  default_name text NOT NULL,
  country_id INTEGER NOT NULL REFERENCES wines.country(id),
  UNIQUE (default_name, country_id)
  );

CREATE INDEX IF NOT EXISTS idx_region_country ON wines.region(country_id);

CREATE TABLE IF NOT EXISTS wines.appellation(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  default_name text NOT NULL,
  region_id INTEGER NOT NULL REFERENCES wines.region(id),
  UNIQUE (default_name, region_id)
  );

CREATE INDEX IF NOT EXISTS idx_appellation_region ON wines.appellation(region_id);

CREATE TABLE wines.color (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  default_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE wines.wine (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  appellation_id INTEGER NOT NULL REFERENCES wines.appellation(id),
  producer VARCHAR(255) NOT NULL,
  cuvee VARCHAR(255),
  color_id INTEGER NOT NULL REFERENCES wines.color(id),
  vintage INTEGER
);

CREATE INDEX IF NOT EXISTS idx_wine_appellation ON wines.wine(appellation_id);
CREATE INDEX IF NOT EXISTS idx_wine_color ON wines.wine(color_id);
