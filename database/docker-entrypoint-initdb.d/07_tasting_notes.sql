CREATE TABLE IF NOT EXISTS tasting_notes.note (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	wine_id INTEGER NOT NULL REFERENCES wines.wine(id),
	user_id INTEGER NOT NULL REFERENCES users.users(id)
);

CREATE INDEX IF NOT EXISTS idx_note_wine_id ON tasting_notes.note(wine_id);
CREATE INDEX IF NOT EXISTS idx_note_user_id ON tasting_notes.note(user_id);

CREATE TABLE IF NOT EXISTS tasting_notes.details (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	note_id INTEGER NOT NULL REFERENCES tasting_notes.note(id),
	criterion_id INTEGER NOT NULL REFERENCES refs.criterion(id),
	criterion_value_id INTEGER NOT NULL REFERENCES refs.criterion_value(id),
	UNIQUE (note_id, criterion_id)
);

CREATE INDEX IF NOT EXISTS idx_details_note_id ON tasting_notes.details(note_id);
CREATE INDEX IF NOT EXISTS idx_details_criterion_id ON tasting_notes.details(criterion_id);
CREATE INDEX IF NOT EXISTS idx_details_criterion_value_id ON tasting_notes.details(criterion_value_id);

CREATE TABLE IF NOT EXISTS tasting_notes.aromas (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	note_id INTEGER NOT NULL REFERENCES tasting_notes.note(id),
	criterion_id INTEGER NOT NULL REFERENCES refs.criterion(id),
	aroma_id INTEGER NOT NULL REFERENCES refs.aroma(id),
	UNIQUE (note_id, criterion_id, aroma_id),
	CONSTRAINT check_criterion_is_aroma_selector
	CHECK (criterion_id IN (
		SELECT id FROM refs.criterion c
		JOIN refs.input_type it ON c.input_type_id = it.id
		WHERE it.name = 'aroma_selector'
	))
);

CREATE INDEX IF NOT EXISTS idx_aromas_note_id ON tasting_notes.aromas(note_id);
CREATE INDEX IF NOT EXISTS idx_aromas_criterion_id ON tasting_notes.aromas(criterion_id);
CREATE INDEX IF NOT EXISTS idx_aromas_aroma_id ON tasting_notes.aromas(aroma_id);
