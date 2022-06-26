const express = require('express')
const router = express.Router() 

// import UserController
const UserController = require('../controllers/UserController.js')

router.post('/create', UserController.create)
router.get('/', UserController.findAll)
router.get('/:id', UserController.findOne)
router.delete('/:id', UserController.destroy)
router.patch('/:id', UserController.update)

 
module.exports = router