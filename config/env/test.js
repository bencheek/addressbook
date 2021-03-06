'use strict'

module.exports = {
  hostname: 'http://localhost:3000',
  logger: {
    enabled: false,
    stdout: true,
    minLevel: 'error',
  },
  database: {
    connection: 'postgres://postgres:samtron@localhost:5432/address-book-test',
  },
}
