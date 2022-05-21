import React, { useEffect, useState } from 'react'
import {
    setCurrentBookInfo,
    setCurrentBookRating,
} from '../../../../redux/bookInfoReducer'

import BookInfo from './BookInfo'
import { connect } from 'react-redux'
import { getBoughtBooksIds } from '../../../../http/booksAPI'

const BookInfoContainer = (props) => {
    const [isBookBought, setIsBookBougth] = useState()
    const isBought = (bookId) => {
        return getBoughtBooksIds().then((data) => {
            return data.booksBought.some((element) => {
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
            isBought(bookId[0]).then((isBougth) => {
                setIsBookBougth(isBougth)
                props.setCurrentBookInfo(bookId[0])
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
