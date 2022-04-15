const Router = require('express').Router
const router = Router()
const UserController = require('../controllers/UserController.js')

/* GET users listing. */
router.get('/', UserController.showAll)

module.exports = router
