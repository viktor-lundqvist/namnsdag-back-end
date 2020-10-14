const bcrypt = require('bcrypt')
const queryUsers = require('../functions/queryUsers')

module.exports = async (req, res) => {
    if (!bcrypt.compareSync(req.body.password, '$2b$10$arvozViZzHB.QDsf2ph6qeWhLY5zjdAA/XUOCRgiR79ECDip/2zdC')) {
        res.status(401).send({ error: "fel lösenord" })
        return
    }

    try {
        const result = await queryUsers()
        return res.status(200).json(result)
    } catch (e) {
        res.status(500).send()
    }
}
