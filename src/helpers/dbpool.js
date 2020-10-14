const { Pool } = require('pg');

const dbConfig = 
    process.env.DATABASE_URL ?
    {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    }:
    {
        user: 'postgres',
        host: 'localhost',
        database: 'namnsdagar',
        password: 'please-let-me-enter-the-great-database',
        port: 5432,
    }

const pool = new Pool(dbConfig)

pool.on('error', (err, client) => {
    console.error('Error:', err)
})

module.exports = pool
