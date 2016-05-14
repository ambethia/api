module.exports = {
  up: `
    CREATE SCHEMA IF NOT EXISTS ambethia;
    SET search_path TO ambethia, public;
  `,
  down: `
    DROP SCHEMA IF EXISTS ambethia;
  `
};
