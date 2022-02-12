const { Pool } = require("pg");
require("dotenv").config();

let pool;

(async function () {
  try {
    pool = new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  } catch (e) {
    console.error("Error while connecting to pool", e);
  }
})();

module.exports = pool;
