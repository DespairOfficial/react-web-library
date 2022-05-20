const Router = require('express')
const router = Router()
const controller = require('../controllers/adminController')

router.get('/users', controller.getUsers)
router.get('/booksBought', controller.getBoughtBooks)
router.get('/rating', controller.getBooksRating)
module.exports = router
