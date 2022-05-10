const { secret } = require('../config')
const path = require('path')
const db = require('../db')

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
                `SELECT book_id FROM users_books_added WHERE user_id='${user_id}'`
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
    async getPdfById(req, res) {
        const bookId = req.params.bookId
        const isShort = req.query.isShort
        const queryPdfName = (
            await db.query(`SELECT pdf_name FROM books where id='${bookId}'`)
        ).rows[0].pdf_name

        const actualPdfName = (bookPdfName, isShort) => {
            if (isShort) {
                return bookPdfName + 'Short.pdf'
            }
            return bookPdfName + '.pdf'
        }

        const options = {
            root: path.join(__dirname, '../books'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true,
            },
        }
        res.sendFile(actualPdfName(queryPdfName, isShort), options, (err) => {
            if (err) {
                res.status(err.status).end()
            } else {
            }
        })
    }

    async addBookToCard(req, res) {
        const bookId = req.body.bookId
        const { id: user_id, role, email } = req.user
        await db.query(
            `INSERT INTO users_books_added (user_id, book_id) VALUES ('${user_id}', '${bookId}')`
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
    async rateBook(req, res) {
        const bookId = req.body.bookId
        const rating = req.body.rating
        const { id: user_id, role, email } = req.user
        const isRated = (
            await db.query(
                `SELECT * FROM users_books_rated WHERE book_id = '${bookId}' and user_id = '${user_id}'`
            )
        ).rows[0]
        if (isRated) {
            await db.query(
                `UPDATE  users_books_rated SET rating = '${rating}' WHERE book_id = '${bookId}' and user_id = '${user_id}'`
            )
        } else {
            await db.query(
                `INSERT INTO users_books_rated (user_id, book_id, rating) VALUES ('${user_id}', '${bookId}',  '${rating}')`
            )
        }

        res.send({ message: 'Rated!', rating: rating })
    }
    async getBookRating(req, res) {
        const bookId = req.params.bookId
        const { id: user_id } = req.user
        const userBookRating = (
            await db.query(
                `SELECT rating FROM users_books_rated WHERE book_id = '${bookId}' and user_id = ${user_id}`
            )
        ).rows[0]
        const avgRating = (
            await db.query(
                `SELECT avg(rating) FROM users_books_rated WHERE book_id = '${bookId}' `
            )
        ).rows[0]
        const ratingTable = (
            await db.query(
                `SELECT rating, COUNT(rating) FROM users_books_rated WHERE book_id = '${bookId}' group by rating order by rating desc`
            )
        ).rows
        const ratesCount = (
            await db.query(
                `SELECT count(*) FROM users_books_rated WHERE book_id = '${bookId}'`
            )
        ).rows[0]
        res.send({
            avgRating: avgRating,
            ratingTable: ratingTable,
            ratesCount: ratesCount,
            userBookRating: userBookRating,
        })
    }
    async buyBook(req, res) {
        const bookId = req.params.bookId
        const { id: user_id } = req.user
        const isBookBought = await db.query(
            `SELECT book_id from users_books_bought WHERE user_id= '${user_id}' and book_id = '${bookId}'`
        ).rows
        if (isBookBought) {
            res.send({ status: 1, message: 'Book is already bougth' })
        } else {
            await db.query(
                `INSERT INTO users_books_bought (user_id, book_id) VALUES ('${user_id}','${bookId}' )`
            )
            res.send({ status: 0, message: 'Bought succesfully' })
        }
    }
    async getBoughtBooks(req, res) {
        const { id: user_id } = req.user
        const books = (
            await db.query(
                `SELECT book_id from users_books_bought WHERE user_id= '${user_id}'`
            )
        ).rows
        res.send({ booksBougth: books })
    }
}
module.exports = new booksController()
