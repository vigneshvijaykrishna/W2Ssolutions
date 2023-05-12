const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const tokendecode = jwt.verify(token, 'ABC!@#55')
        console.log("token", tokendecode, "tokenCode:", token)
        req.user = tokendecode
        next()
    } catch (error) {
        res.json({
            message: 'Authentication Failed'
        })
    }
}

module.exports = authenticate