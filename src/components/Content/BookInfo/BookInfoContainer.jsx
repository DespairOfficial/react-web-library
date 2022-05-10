import React, { useEffect, useState } from 'react'
import {
    setCurrentBookInfo,
    setCurrentBookRating,
} from '../../../redux/bookInfoReducer'
import BookInfo from './BookInfo'
import { connect } from 'react-redux'
import { getBougthBooks } from '../../../http/booksAPI'
const BookInfoContainer = (props) => {
    const [isBookBought, setIsBookBougth] = useState()
    const isBought = (bookId) => {
        return getBougthBooks().then((data) => {
            return data.booksBougth.some((element) => {
                return bookId.toString() === element.book_id.toString()
            })
        })
    }
    useEffect(() => {
        const params = window.location.pathname
        let text = params
        let pattern = /(?<=\/books\/)[\w+.-]+/
        let bookId = text.match(pattern)
        if (bookId) {
            props.setCurrentBookInfo(bookId[0])

            isBought(bookId[0]).then((isBougth) => {
                setIsBookBougth(isBougth)
            })
        }
    }, [])

    return (
        <BookInfo
            book={props.book}
            setCurrentBookRating={props.setCurrentBookRating}
            isBookBought={isBookBought}
        />
    )
}
const mapStateToProps = (state) => ({
    book: state.bookInfo.book,
})
export default connect(mapStateToProps, {
    setCurrentBookInfo,
    setCurrentBookRating,
})(BookInfoContainer)
