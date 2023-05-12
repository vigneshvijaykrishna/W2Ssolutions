const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

const CustomerRoute = require('./routes/customerroute')
const AuthRoute = require('./routes/auth')
const mongoDB = "mongodb://localhost:27017/w2scustomer";
const PORT = process.env.PORT || 8001
mongoose
    .connect(mongoDB, { useNewUrlParser: true })
    .then(() => app.listen(PORT))
    .then(() =>
        console.log(`Database Connection Successfull ${PORT}`)
    )
    .catch((err) => console.log(err));


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/customer', CustomerRoute)
app.use('/api', AuthRoute)