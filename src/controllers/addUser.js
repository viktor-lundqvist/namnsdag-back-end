const queryUsers = require('../functions/queryUsers')
const registerUser = require('../functions/registerUser')

module.exports = async (req, res) => {
    const users = await queryUsers()

    if (users.length > 200) {
        res.status(400).send({ error: "Mejllistan är för tillfället full" }) // kommer man avregistrera andra?
        return
    }

    if (users.find(entry => entry.email === req.body.email)){
        res.status(400).send({ error: "Mejladressen är redan tillagd" })
        return
    }

    try {
        await registerUser(req.body.email)
        res.status(200).send()
    } catch (e) {
        res.status(500).send()
    }
}
