const express = require('express')
const router = express.Router()

const CustomerController = require('../controllers/CustomerController')
const athenticate = require('../middleware/authenticate')

router.get('/', athenticate, CustomerController.index)
router.post('/show', CustomerController.show)
router.post('/store', CustomerController.store)
router.post('/update', CustomerController.update)
router.post('/remove', CustomerController.Remove)

module.exports = router