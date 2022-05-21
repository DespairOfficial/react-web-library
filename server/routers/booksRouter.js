const Router = require('express')
const router = Router()
const controller = require('../controllers/booksController')

router.get('/', controller.getBooks)

router.post('/toCard', controller.addBookToCard)
router.post('/rate', controller.rateBook)
router.post('/comments/:bookId', controller.leaveAComment)
router.put(
    '/:bookId/setLastReadedPage/:lastPageReaded',
    controller.setLastReadedPage
)

router.delete('/toCard/:bookId', controller.removeBookFromCard)
router.delete('/comments/:commentId', controller.removeCommentById)

router.get('/pdf/:bookId', controller.getPdfById)
router.get('/rating/:bookId', controller.getBookRating)
router.get('/buyBook/:bookId', controller.buyBook)
router.get('/bought', controller.getBoughtBooks)
router.get('/boughtIds', controller.getBoughtBooksIds)
router.get('/comments/:bookId', controller.getCommentsByBook)
router.get('/favorites', controller.getFavoriteBooksByUser)
router.get('/:bookId', controller.getBookById)

module.exports = router
