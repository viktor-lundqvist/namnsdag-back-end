const moment = require('moment')
const fs = require('fs')

module.exports = () => {
    const yearNamnsdagar = JSON.parse(fs.readFileSync(__dirname + '/../assets/namnsdagar.json'))
    namnsdagar = yearNamnsdagar[moment().format('D/M')]
    return namnsdagar
}
