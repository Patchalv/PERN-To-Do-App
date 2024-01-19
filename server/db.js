const Pool = require("pg").Pool;
const { DB } = require('../config');


const pool = new Pool({
    user: DB.PGUSEER,
    host: DB.PGHOST,
    port: DB.PGPORT,
    database: DB.PGDATABASE
});

module.exports = pool;