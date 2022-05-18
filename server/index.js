const express = require('express')
const cors = require('cors')

const authRouter = require('./routers/authRouter')
const booksRouter = require('./routers/booksRouter')
const CORSMiddleware = require('./middlewares/CORSMiddleware')
const authMiddleware = require('./middlewares/authMiddleware')
const donationRouter = require('./routers/donationRouter')

const app = express()

const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use(cors({ credentials: true, origin: PORT }))

app.use('/books', [CORSMiddleware, authMiddleware], booksRouter)
app.use('/auth', CORSMiddleware, authRouter)
app.use('/donate', [CORSMiddleware, authMiddleware], donationRouter)
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})
