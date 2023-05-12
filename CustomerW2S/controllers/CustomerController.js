const Customer = require('../models/Customer')

// list of customers

const index = (req, res, next) => {
    Customer.find().then(responce => {
            res.json({
                responce
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}

// Show Customers By ID

const show = (req, res, next) => {
    let customerID = req.body.customerID
    Customer.findById(customerID).then(responce => {
            res.json({
                responce
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

//Add new Customer

const store = (req, res) => {
    let customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        Card_number: req.body.Card_number
    })
    customer.save().then(responce => {
            res.json({
                message: 'Customer Added Succesfully',
                responce: responce
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

//update customer by ID

const update = (req, res) => {
    let customerID = req.body.customerID
    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        Card_number: req.body.Card_number
    }
    console.log("ID:", customerID)
    console.log(":updatedData", updatedData)
    Customer.FindByIdAndUpdate(customerID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Customer updated succesfully"
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

//delete a customer

const Remove = (req, res) => {
    let customerID = req.body.customerID
    Customer.findOneAndRemove(customerID)
        .then(() => {
            res.json({
                message: "Customer Deleted Successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "An error Occured"
            })
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    Remove
}