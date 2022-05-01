const SET_READING_BOOK = 'SET-READING-BOOK'

let initialState = {
    book: null,
}

const readingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_READING_BOOK: {
            return { ...state, book: action.book }
        }
        default:
            return { ...state }
    }
}
export const setReadingBook = (book) => ({ type: SET_READING_BOOK, book })
export default readingRoomReducer
