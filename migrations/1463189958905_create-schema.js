exports.up = (pgm) => {
  pgm.sql('CREATE SCHEMA ambethia;')
}

exports.down = (pgm) => {
  pgm.sql('DROP SCHEMA ambethia;')
}
