const db = require('../db')
class donationContoller {
    async donate(req, res) {
        const { id: user_id } = req.user
        const value = req.body.value
        if (value) {
            try {
                await db.query(
                    `INSERT INTO donations (user_id, value) VALUES (${user_id}, ${value})`
                )
            } catch (error) {
                console.log(error)
                return res
                    .status(500)
                    .json({ status: 1, message: 'Something went wrong' })
            }
            res.send({ status: 0, message: 'Thank you for support!' })
        } else {
            return res
                .status(500)
                .json({ status: 1, message: 'Something went wrong' })
        }
    }
    async getSumOfFees(req, res) {
        try {
            const sumOfFees = (
                await db.query(`SELECT SUM(value) FROM donations`)
            ).rows[0].sum
            res.send({ status: 0, sumOfFees })
        } catch (error) {
            console.log(error)
            return res
                .status(500)
                .json({ status: 1, message: 'Something went wrong' })
        }
    }
}
module.exports = new donationContoller()
