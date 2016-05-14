module.exports = {
  up: `
    CREATE OR REPLACE FUNCTION utility.set_created_at()
    RETURNS TRIGGER AS $$
    BEGIN
      if (new.created_at is null) then
        new.created_at := current_timestamp;
      end if;
      return new;
    END;
    $$ LANGUAGE plpgsql;

    CREATE OR REPLACE FUNCTION utility.set_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
      new.updated_at := current_timestamp;
      return new;
    END;
    $$ LANGUAGE plpgsql;
  `,
  down: `
    DROP FUNCTION IF EXISTS utility.set_created_at();
    DROP FUNCTION IF EXISTS utility.set_updated_at();
  `
};
