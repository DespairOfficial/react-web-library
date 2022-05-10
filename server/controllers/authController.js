const db = require('../db')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')

const generateAccessToken = (id, role, email) => {
    const payload = { id, role, email }
    return jwt.sign(payload, secret, { expiresIn: '24h' })
}
class authController {
    async registration(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ message: 'Errors due registration', errors })
            }
            const { username, password, email } = req.body
            const candidate = (
                await db.query(`SELECT * FROM users WHERE email = '${email}'`)
            ).rows[0]

            if (candidate) {
                return res
                    .status(400)
                    .json({ message: `User with ${email} already exists` })
            }
            const hashedPassword = bcrypt.hashSync(password, 10)
            const defaultRole = 'USER'
            await db.query(
                `INSERT INTO users (name, email, password, role) VALUES('${username}','${email}', '${hashedPassword}', '${defaultRole}')`
            )
            res.set('Access-Control-Allow-Origin', '*')
            return res.json('User successfully created')
        } catch (e) {}
    }
    async login(req, res) {
        try {
            res.set('Access-Control-Allow-Origin', '*')
            const { email, password } = req.body
            const user = (
                await db.query(`SELECT * FROM users WHERE email = '${email}'`)
            ).rows[0]
            if (!user) {
                return res.status(400).json({
                    message: `User with email: ${email} does't exists`,
                })
            }
            const isPasswordValid = await bcrypt.compare(
                password,
                user.password
            )

            if (!isPasswordValid) {
                return res.status(400).json({ message: `Password is wrong` })
            }
            const token = generateAccessToken(user.id, user.role, user.email)

            return res.json({ token })
        } catch (e) {}
    }
    async getUsers(req, res) {
        try {
            res.json('Hello from server!')
        } catch (e) {}
    }
}
module.exports = new authController()
