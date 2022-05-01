const Router = require('express')
const router = Router()
const controller = require('../controllers/booksController')

router.get('/', controller.getBooks)

router.get('/:bookId', controller.getBookById)

router.post('/toCard', controller.addBookToCard)
router.delete('/toCard/:bookId', controller.removeBookFromCard)
module.exports = router
