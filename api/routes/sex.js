const Router = require('express').Router
const router = Router()
const SexController = require('../controllers/SexController')

router.get('/', SexController.showAll)
router.get('/:id', SexController.show)
router.post('/', SexController.store)
router.put('/', SexController.update)
router.delete('/', SexController.delete)

module.exports = router
