import { getBookData } from '../http/booksAPI'
const SET_BOOK_TO_BUY = 'SET-BOOK-TO-BUY'

const initialState = {
    book: null,
}
const BuyBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK_TO_BUY: {
            return { ...state, book: action.book }
        }
        default: {
            return { ...state }
        }
    }
}
export default BuyBookReducer

const setBookToBuy = (book) => {
    return {
        type: SET_BOOK_TO_BUY,
        book,
    }
}

export const setCurrentBookToBuy = (bookId) => {
    return (dispatch) => {
        getBookData(bookId).then((data) => {
            dispatch(setBookToBuy(data))
        })
    }
}
