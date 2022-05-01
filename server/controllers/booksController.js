const db = require('../db')
const { secret } = require('../config')

class booksController {
    async getBooks(req, res) {
        const count = (await db.query('SELECT COUNT(*) FROM books ')).rows[0]
            .count
        const limit = req.query.limit
        const page = req.query.page
        const query = await db.query(
            `SELECT * FROM books LIMIT '${limit}' OFFSET '${
                (page - 1) * limit
            }' `
        )
        let books = query.rows

        const { id: user_id, role, email } = req.user
        let booksIds = (
            await db.query(
                `SELECT book_id FROM users_books_added WHERE user_id=${user_id}`
            )
        ).rows
        booksIds = Array.from(booksIds, (obj) => obj.book_id)

        books = books.map((book) => {
            if (booksIds.includes(book.id)) {
                book.isInCard = true
            }
            return book
        })
        res.send({ books: books, booksCount: count })
    }
    async getBookById(req, res) {
        const bookId = req.params.bookId
        const book = (
            await db.query(`SELECT * FROM books where id='${bookId}'`)
        ).rows[0]

        res.send(book)
    }
    async addBookToCard(req, res) {
        const bookId = req.body.bookId
        const { id: user_id, role, email } = req.user
        await db.query(
            `INSERT INTO users_books_added (user_id, book_id) VALUES (${user_id}, ${bookId})`
        )

        res.send({ message: 'Subscribed!' })
    }
    async removeBookFromCard(req, res) {
        const bookId = req.params.bookId
        const { id: user_id, role, email } = req.user
        await db.query(
            `DELETE FROM users_books_added WHERE user_id = '${user_id}' AND book_id = '${bookId}'`
        )

        res.send({ message: 'Removed!' })
    }
}
module.exports = new booksController()
