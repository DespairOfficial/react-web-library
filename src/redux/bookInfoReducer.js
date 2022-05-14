import { getBookData, getBookRating, rateBook } from '../http/booksAPI'
const SET_BOOK_INFO = 'SET-BOOK-INFO'

const initialState = {
    book: null,
}
const BookInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK_INFO: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.book = action.book
            newState.book.rating = action.rating
            return newState
        }

        default: {
            return { ...state }
        }
    }
}
export default BookInfoReducer

const setBookInfo = (book, rating) => {
    return {
        type: SET_BOOK_INFO,
        book,
        rating,
    }
}

export const setCurrentBookInfo = (bookId) => {
    return (dispatch) => {
        const rateBookInfo = getBookRating(bookId)
        const mainBookInfo = getBookData(bookId)
        Promise.all([mainBookInfo, rateBookInfo]).then((values) => {
            dispatch(setBookInfo(...values))
        })
    }
}
export const setCurrentBookRating = (bookId, rating) => {
    return (dispatch) => {
        rateBook(bookId, rating).then(() => {
            dispatch(setCurrentBookInfo(bookId))
        })
    }
}
