const queryUsers = require('../functions/queryUsers')
const leaveUser = require('../functions/leaveUser')

module.exports = async (req, res) => {
    let users = await queryUsers()

    if (!users.find(user => user.email === req.body.email)) {
        res.status(400).send({ error: "Hittade inte mejladressen" })
        return
    }

    try {
        await leaveUser(req.body.email)
        res.status(200).send()
    } catch (e) {
        res.status(500).send()
    }
}
