const TOGGLE_CARD = 'TOGGLE-IN-OUT-CARD'
const SET_BOOKS = 'SET-BOOKS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_BOOKS_COUNT = 'SET-TOTAL-BOOKS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_ADDING_IN_CARD = 'TOGGLE-IS-ADDING-IN-CARD'

let initialState = {
    books: [],
    totalBookCount: 0,
    pageSize: 2,
    currentPage: 1,
    isFetching: true,
    isAddingBooks: [],
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CARD: {
            return {
                ...state,
                books: state.books.map((book) => {
                    if (book.id === action.bookId) {
                        return { ...book, isInCard: !book.isInCard }
                    }
                    return book
                }),
            }
        }
        case SET_BOOKS: {
            return { ...state, books: action.books }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.newCurrentPage }
        }
        case SET_TOTAL_BOOKS_COUNT: {
            return { ...state, totalBookCount: action.totalBooksCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_ADDING_IN_CARD: {
            return {
                ...state,
                isAddingBooks: action.isFetching
                    ? [...state.isAddingBooks, action.bookId]
                    : state.isAddingBooks.filter((id) => id !== action.bookId),
            }
        }
        default:
            return state
    }
}

export const toggleAddToCard = (bookId) => ({ type: TOGGLE_CARD, bookId }) // returning whole object
export const setBooks = (books) => ({ type: SET_BOOKS, books })
export const setCurrentPage = (newCurrentPage) => ({
    type: SET_CURRENT_PAGE,
    newCurrentPage,
})
export const setTotalBooksCount = (totalBooksCount) => ({
    type: SET_TOTAL_BOOKS_COUNT,
    totalBooksCount,
})
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleIsAddingInCard = (bookId, isFetching) => ({
    type: TOGGLE_IS_ADDING_IN_CARD,
    bookId,
    isFetching,
})
export default shopReducer
