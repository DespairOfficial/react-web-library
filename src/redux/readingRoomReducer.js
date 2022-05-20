import { getBookData, getPdf, setLastReadedPage } from '../http/booksAPI'
const SET_READING_BOOK = 'SET-READING-BOOK'
const SET_LAST_READED_PAGE = 'SET-LAST-READED-PAGE'
let initialState = {
    book: null,
}

const readingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_READING_BOOK: {
            return { ...state, book: { ...action.book, pdf: action.pdf } }
        }
        case SET_LAST_READED_PAGE: {
            return {
                ...state,
                book: { ...state.book, lastReadedPage: action.lastReadedPage },
            }
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
const setReadedPage = (lastReadedPage) => {
    return {
        type: SET_LAST_READED_PAGE,
        lastReadedPage,
    }
}
export const setCurrentBook = (bookId) => {
    return (dispatch) => {
        const bookJSON = getBookData(bookId)
        const bookPDF = getPdf(bookId)
        Promise.all([bookJSON, bookPDF])
            .then((values) => {
                dispatch(setReadingBook(...values))
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }
}
export const confirmLastReadedPage = (bookId, page) => {
    return (dispatch) => {
        setLastReadedPage(bookId, page)
            .then(() => {
                dispatch(setReadedPage(page))
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }
}
export default readingRoomReducer
