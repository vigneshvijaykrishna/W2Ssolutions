const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    },
    Card_number: {
        type: Number
    },
    timestamps: { type: Date }
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer