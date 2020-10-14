
const queryUsers = require('../functions/queryUsers')
const sendMails = require('../functions/sendMails')
const namnsdagar = require('../functions/getNamnsdag')

const prettyNames = (arr) => {
    if (arr.length === 1) return arr[0]
    return arr.slice(0, -1).join(', ') + ' och ' + arr[arr.length - 1]
}

const main = async () => {
    const userRows = await queryUsers()
    if (!userRows.length) return
    const recipients = userRows.map(row => row.email)

    const subject = 
        namnsdagar()[0].includes('(ingen namnsdag') ? 
        namnsdagar()[0].replace(' (ingen namnsdag)', '') : 
        prettyNames(namnsdagar())

    const text = 
        namnsdagar()[0].includes('(ingen namnsdag') ?
        `Idag har ingen namnsdag.

Gå till namnsdag.herokuapp.com eller skriv till namnsdagar.bot@gmail.com för att lämna mejllistan.`:
        `Idag har ${prettyNames(namnsdagar())} namnsdag.

Gå till namnsdag.herokuapp.com eller skriv till namnsdagar.bot@gmail.com för att lämna mejllistan.`

    try {
        sendMails(recipients, subject, text)
    } catch (e) {
        console.log(e)
    }
}

main()
