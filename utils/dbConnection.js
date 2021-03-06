const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'aaron',
    database: 'app1',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

module.exports = pool;