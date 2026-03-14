INSERT INTO users.role(name) VALUES ('admin'), ('moderator'), ('user') ON CONFLICT (name) DO NOTHING;
