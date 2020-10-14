const bcrypt = require('bcrypt')

const main = (plaintext) => {
    const saltRounds = 10
    const result =  bcrypt.hashSync(plaintext, saltRounds)
    console.log(result)
}

main('password')

module.exports = main
