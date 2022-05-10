const Router = require('express')
const router = Router()
const controller = require('../controllers/authController')
const { check } = require('express-validator')

router.post(
    '/registration',
    [
        check('email', 'Email cannot be empty').notEmpty(),
        check('username', 'Username cannot be empty').notEmpty(),
        check(
            'password',
            'Password cannot be shorter, than 4 letters'
        ).isLength({ min: 4 }),
    ],
    controller.registration
)
router.post('/login', controller.login)

module.exports = router
