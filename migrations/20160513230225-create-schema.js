module.exports = {
  up: `
    CREATE SCHEMA IF NOT EXISTS ambethia;
    CREATE SCHEMA IF NOT EXISTS utility;
    SET search_path TO ambethia, utility, public;
  `,
  down: `
    DROP SCHEMA IF EXISTS ambethia;
    DROP SCHEMA IF EXISTS utility;
  `
};
