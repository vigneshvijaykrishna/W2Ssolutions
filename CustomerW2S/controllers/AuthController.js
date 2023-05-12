const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save().then(user => {
                res.json({
                    message: 'User added Succesfully'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error occured'
                })
            })
    })

}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({ $or: [{ email: username }, { phone: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'ABC!@#55', { expiresIn: '1h' })
                        res.json({
                            message: "Login Successfull",
                            token
                        })
                    }
                })
            } else {
                res.json({
                    message: "User not found"
                })
            }
        })
}


module.exports = {
    register,
    login
}