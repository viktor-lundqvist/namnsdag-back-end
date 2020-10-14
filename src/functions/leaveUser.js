const pool = require('../helpers/dbpool')
const queries = require('../helpers/queries')

module.exports = async (email) => {
    try {
        const result = await pool.query(queries.LEAVE, [email])
    } catch (e) {
        console.log('Error in query', e)
        throw e
    }
}