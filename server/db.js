const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: '2718',
    host: 'localhost',
    port: 5432,
    database: 'web-library',
})

module.exports = pool
