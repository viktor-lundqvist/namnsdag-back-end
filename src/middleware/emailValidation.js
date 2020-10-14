const validator = require('validator')

module.exports = (req, res, next) => {
    if (!req.body.email) {
        res.status(400).send({ error: "Ingen mejladress angiven" })
        return
    }

    if (!validator.isEmail(req.body.email)) {
        res.status(400).send({ error: "Ogiltig mejladress angiven" })
        return
    }
    req.body.email = validator.normalizeEmail(req.body.email)
    next()
}
