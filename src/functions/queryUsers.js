
const pool = require('../helpers/dbpool')
const queries = require('../helpers/queries')

module.exports = async () => {
    try {
        const result = await pool.query(queries.USERS)
        return result.rows
    } catch (e) {
        console.log('Error in query', e)
        throw e
    }
}
