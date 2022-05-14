import { getBookData, getPdf } from '../http/booksAPI'
const SET_READING_BOOK = 'SET-READING-BOOK'

let initialState = {
    book: null,
}

const readingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_READING_BOOK: {
            return { ...state, book: { ...action.book, pdf: action.pdf } }
        }
        default:
            return { ...state }
    }
}
const setReadingBook = (book, pdf) => {
    return {
        type: SET_READING_BOOK,
        book,
        pdf,
    }
}
export const setCurrentBook = (bookId) => {
    return (dispatch) => {
        const bookJSON = getBookData(bookId)
        const bookPDF = getPdf(bookId)
        Promise.all([bookJSON, bookPDF]).then((values) => {
            dispatch(setReadingBook(...values))
        })
    }
}
export default readingRoomReducer
