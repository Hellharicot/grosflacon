CREATE TABLE IF NOT EXISTS wines.country (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(250) NOT NULL UNIQUE
  );

CREATE TABLE IF NOT EXISTS wines.region(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text NOT NULL,
  country_id INTEGER NOT NULL REFERENCES wines.country(id)
  );

CREATE INDEX idx_region_country ON wines.region(country_id);

CREATE TABLE IF NOT EXISTS wines.appellation(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text NOT NULL,
  region_id INTEGER NOT NULL REFERENCES wines.region(id)
  );

CREATE INDEX idx_appellation_region ON wines.appellation(region_id);
