'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config()
}

const env = process.env;

module.exports = {
  host: env.HOST || 8080,
  port: env.PORT || 'localhost',
  dbschema: env.DBSCHEMA || 'test',
  dbport: env.DBPORT,
  dbuser: env.DBUSER || 'zaytsir',
  dbpwd: env.DBPWD || '2708648913',
  dbhost: env.DBHOST,
  dbname: env.DBNAME || 'test'
};
