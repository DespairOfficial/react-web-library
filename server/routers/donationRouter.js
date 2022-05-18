const Router = require('express')
const router = Router()
const controller = require('../controllers/donationContoller')

router.post('/', controller.donate)
router.get('/', controller.getSumOfFees)
module.exports = router
