const express = require('express')
const cors = require('cors')

const CORSMiddleware = require('./middlewares/CORSMiddleware')
const authMiddleware = require('./middlewares/authMiddleware')
const userMiddleware = require('./middlewares/userMiddleware')
const adminMiddleware = require('./middlewares/adminMiddleware')

const authRouter = require('./routers/authRouter')
const booksRouter = require('./routers/booksRouter')
const donationRouter = require('./routers/donationRouter')
const adminRouter = require('./routers/adminRouter')

const app = express()

const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use(cors({ credentials: true, origin: PORT }))

app.use(
    '/admin',
    [CORSMiddleware, authMiddleware, adminMiddleware],
    adminRouter
)
app.use('/books', [CORSMiddleware, authMiddleware, userMiddleware], booksRouter)
app.use('/auth', CORSMiddleware, authRouter)
app.use(
    '/donate',
    [CORSMiddleware, authMiddleware],
    userMiddleware,
    donationRouter
)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})
