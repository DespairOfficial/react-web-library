import { getBookData } from '../http/booksAPI'
const SET_SIDEBAR_BOOK = 'SET-SIDEBAR-BOOK'

let initialState = {
    book: null,
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIDEBAR_BOOK: {
            return { ...state, book: { ...action.book } }
        }
        default:
            return { ...state }
    }
}
const setReadingBook = (book) => {
    return {
        type: SET_SIDEBAR_BOOK,
        book,
    }
}
export const setCurrentBook = (bookId) => {
    return (dispatch) => {
        const bookJSON = getBookData(bookId)
        Promise.all([bookJSON]).then((values) => {
            dispatch(setReadingBook(...values))
        })
    }
}
export default sidebarReducer
