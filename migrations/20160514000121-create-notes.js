module.exports = {
  up: `
    CREATE EXTENSION IF NOT EXISTS pgcrypto;

    CREATE TABLE IF NOT EXISTS notes(
      id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title      TEXT,
      body       TEXT,
      created_at TIMESTAMP,
      updated_at TIMESTAMP
    );

    COMMENT ON TABLE notes             IS 'A simple note.';
    COMMENT ON COLUMN notes.id         IS 'The primary key for the note.';
    COMMENT ON COLUMN notes.title      IS 'The title of the note.';
    COMMENT ON COLUMN notes.body       IS 'The body the note (in Markdown).';
    COMMENT ON COLUMN notes.created_at IS 'The time the note was created.';
    COMMENT ON COLUMN notes.updated_at IS 'The time the note was last updated.';
  `,
  down: `
    DROP TABLE IF EXISTS notes;
    DROP EXTENSION IF EXISTS pgcrypto;
  `
};
