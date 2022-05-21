const path = require('path')
const db = require('../db')

class booksController {
    async getBooks(req, res) {
        const limit = req.query.limit || 2
        const page = req.query.page || 1
        const filter = req.query.filter.toLowerCase()
        let query = ''
        let countQuery = ''
        if (filter) {
            query = `((SELECT * FROM books WHERE lower(title) like '%${filter}%' or  lower(text) like '%${filter}%')
            UNION 
            (SELECT * FROM books where   EXISTS ( SELECT * from unnest(authors) as X where x ~* '${filter}' ))) 
             LIMIT '${limit}' OFFSET '${(page - 1) * limit}' `

            countQuery = `(SELECT count(*) FROM books WHERE lower(title) like '%${filter}%' or  lower(text) like '%${filter}%')
            UNION 
            (SELECT count(*) FROM books where   EXISTS ( SELECT * from unnest(authors) as X where x ~* '${filter}' ))`
        } else {
            query = `SELECT * FROM books LIMIT '${limit}' OFFSET '${
                (page - 1) * limit
            }'`
            countQuery = 'SELECT COUNT(*) FROM books'
        }
        const queryBooks = await db.query(query)
        let books = queryBooks.rows

        const countRes = await db.query(countQuery)
        const count = countRes.rows[0].count

        const { id: user_id } = req.user
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
        const { id: user_id } = req.user
        const bookBought = (
            await db.query(
                `SELECT * FROM users_books_bought where book_id='${bookId}' and user_id='${user_id}' `
            )
        ).rows[0]
        const lastPageReadedQuery = await db.query(
            `SELECT page FROM user_book_page where book_id='${bookId}' and user_id='${user_id}' `
        )
        let lastReadedPage = 1
        if (lastPageReadedQuery.rows.length) {
            lastReadedPage = lastPageReadedQuery.rows[0].page
        }

        const book = (
            await db.query(`SELECT * FROM books where id='${bookId}'`)
        ).rows[0]
        let isBookBought = false
        if (bookBought) {
            isBookBought = true
        }
        res.send({ ...book, isBookBought, lastReadedPage })
    }
    async getPdfById(req, res) {
        const bookId = req.params.bookId
        let isShort = true
        const { id: user_id } = req.user

        const bookAllData = (
            await db.query(`SELECT * FROM books where id='${bookId}'`)
        ).rows[0]
        const PdfName = bookAllData.pdf_name
        const isBookBought = (
            await db.query(
                `SELECT * FROM users_books_bought where book_id='${bookId}' and user_id='${user_id}' `
            )
        ).rows[0]
        if (isBookBought || bookAllData.is_free) {
            isShort = false
        }
        const getActualPdfName = (bookPdfName, isShort) => {
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
        res.sendFile(getActualPdfName(PdfName, isShort), options, (err) => {
            if (err) {
                res.status(err.status).end()
            }
        })
    }

    async addBookToCard(req, res) {
        const bookId = req.body.bookId
        const { id: user_id } = req.user
        await db.query(
            `INSERT INTO users_books_added (user_id, book_id) VALUES ('${user_id}', '${bookId}')`
        )

        res.send({ message: 'Subscribed!' })
    }
    async removeBookFromCard(req, res) {
        const bookId = req.params.bookId
        const { id: user_id } = req.user
        await db.query(
            `DELETE FROM users_books_added WHERE user_id = '${user_id}' AND book_id = '${bookId}'`
        )

        res.send({ message: 'Removed!' })
    }
    async rateBook(req, res) {
        const bookId = req.body.bookId
        const rating = req.body.rating
        const { id: user_id } = req.user
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
                `SELECT rating FROM users_books_rated WHERE book_id = '${bookId}' and user_id = '${user_id}'`
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
    async getBoughtBooksIds(req, res) {
        const { id: user_id } = req.user
        const books = (
            await db.query(
                `SELECT book_id from users_books_bought WHERE user_id= '${user_id}'`
            )
        ).rows
        res.send({ booksBought: books })
    }
    async getCommentsByBook(req, res) {
        const bookId = req.params.bookId
        const comments = (
            await db.query(
                `SELECT  users_books_comments.id, users_books_comments.text, users_books_comments.date, 
                users.name, users.role
                from users_books_comments JOIN users ON user_id = users.id WHERE  book_id= '${bookId}'`
            )
        ).rows
        res.send({ comments: comments })
    }
    async leaveAComment(req, res) {
        const commentText = req.body.commentText
        const bookId = req.params.bookId
        const { id: user_id } = req.user

        const commentId = (
            await db.query(
                `INSERT INTO users_books_comments (user_id, book_id, text) VALUES ('${user_id}', '${bookId}','${commentText}') returning users_books_comments.id`
            )
        ).rows[0].id
        const newComment = (
            await db.query(
                `SELECT  users_books_comments.id, users_books_comments.text, users_books_comments.date,
                users.name, users.role
                from users_books_comments JOIN users ON user_id = users.id WHERE  users_books_comments.id= '${commentId}'`
            )
        ).rows[0]
        res.send({ message: 'Success', newComment: newComment })
    }
    async removeCommentById(req, res) {
        const commentId = req.params.commentId
        const { id: userId } = req.user
        const queryForUserId = await db.query(
            `SELECT user_id FROM users_books_comments WHERE id = '${commentId}'`
        )
        const user_id = queryForUserId.rows[0].user_id
        if (user_id === userId) {
            await db.query(
                `DELETE FROM users_books_comments WHERE id = '${commentId}'`
            )
            res.send({ status: 0, message: 'Removed' })
        } else {
            res.send({ status: 1, message: 'You have no rights for this' })
        }
    }
    async setLastReadedPage(req, res) {
        const { id: userId } = req.user
        const bookId = req.params.bookId
        const page = req.params.lastPageReaded
        const isBookReaded = await db.query(
            `SELECT * FROM user_book_page WHERE user_id = ${userId} AND book_id = ${bookId}`
        )

        if (isBookReaded.rows.length) {
            await db.query(
                `UPDATE  user_book_page SET page = '${page}' WHERE  user_id = '${userId}' AND book_id = '${bookId}' `
            )

            res.send({ message: 'Page was changed succesfully' })
        } else {
            await db.query(
                `INSERT INTO user_book_page (user_id, book_id, page) VALUES ('${userId}' , '${bookId}' , '${page}')`
            )
            res.send({ message: 'Page was settled succesfully' })
        }
    }
    async getFavoriteBooksByUser(req, res) {
        const { id: userId } = req.user
        const books = await db.query(
            `select books.id, books.title, books.authors, books.image from users_books_added   JOIN books on users_books_added.book_id = books.id where user_id ='${userId}' `
        )
        res.send({ books: books.rows })
    }
    async getBoughtBooks(req, res) {
        const { id: user_id } = req.user
        const books = (
            await db.query(
                `SELECT users_books_bought.book_id, books.title, books.authors, books.image from users_books_bought JOIN books on users_books_bought.book_id = books.id WHERE user_id= '${user_id}'`
            )
        ).rows
        res.send({ booksBought: books })
    }
}
module.exports = new booksController()
