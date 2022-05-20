const db = require('../db')
class adminController {
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`)
        res.send({ users: users.rows })
    }
    async getBoughtBooks(req, res) {
        const bougthBooksUsers = await db.query(
            `select users_books_bought.user_id, users.name, users.email, books.title, books.authors from users_books_bought JOIN users on users_books_bought.user_id = users.id JOIN books on users_books_bought.book_id = books.id`
        )

        res.send({ stats: bougthBooksUsers.rows })
    }
    async getBooksRating(req, res) {
        const rating = await db.query(
            'select users_books_rated.user_id, users.name, users.email, books.title, books.authors, rating  from users_books_rated join users on users.id = users_books_rated.user_id join books on users_books_rated.book_id = books.id'
        )
        res.send({ rating: rating.rows })
    }
}
module.exports = new adminController()
