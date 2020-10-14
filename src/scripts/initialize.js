
const pool = require('../helpers/dbpool')
const queries = require('../helpers/queries')

pool.connect((err, client, done) => {
    if (err) throw err
    client.query(queries.INITIALIZE)
        .then((res) => console.log('Success', res))
        .catch((e) => console.log('Failure', e))
})
