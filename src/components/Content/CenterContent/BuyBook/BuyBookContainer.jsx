import React, { useEffect } from 'react'
import BuyBook from './BuyBook'
import { connect } from 'react-redux'
import { setCurrentBookToBuy } from '../../../../redux/buyBookReducer'
import { buyBook, getBougthBooks } from '../../../../http/booksAPI'
import { useNavigate } from 'react-router-dom'
const BuyBookContainer = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        const params = window.location.pathname
        let text = params
        let pattern = /(?<=\/buy\/)[\w+.-]+/
        let bookId = text.match(pattern)
        if (bookId) {
            getBougthBooks().then((data) => {
                const isBought = data.booksBougth.some((element) => {
                    return bookId[0] === element.book_id.toString()
                })
                if (isBought) {
                    navigate(`/books/${bookId}`)
                } else {
                    props.setCurrentBookToBuy(bookId)
                }
            })
        }
    }, [])
    return <BuyBook book={props.book} buyBook={buyBook} />
}
const mapStateToProps = (state) => ({
    book: state.buyBook.book,
})
export default connect(mapStateToProps, {
    setCurrentBookToBuy,
})(BuyBookContainer)
