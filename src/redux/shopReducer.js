import { getBooks, removeBookFromCard, addBookToCard } from '../http/booksAPI'
const TOGGLE_CARD = 'TOGGLE-IN-OUT-CARD'
const SET_BOOKS = 'SET-BOOKS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_BOOKS_COUNT = 'SET-TOTAL-BOOKS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_ADDING_IN_CARD = 'TOGGLE-IS-ADDING-IN-CARD'
const SET_SEARCH_FILTER = 'SET-SEARCH-FILTER'
let initialState = {
    books: [],
    totalBookCount: 0,
    pageSize: 2,
    currentPage: 1,
    filter: '',
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
        case SET_SEARCH_FILTER: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.filter = action.filter
            return newState
        }
        default:
            return { ...state }
    }
}

const toggleAddToCard = (bookId) => ({ type: TOGGLE_CARD, bookId }) // returning whole object
const setBooks = (books) => ({ type: SET_BOOKS, books })
const setCurrentPage = (newCurrentPage) => ({
    type: SET_CURRENT_PAGE,
    newCurrentPage,
})
const setTotalBooksCount = (totalBooksCount) => ({
    type: SET_TOTAL_BOOKS_COUNT,
    totalBooksCount,
})
const setFilter = (filter) => {
    return { type: SET_SEARCH_FILTER, filter }
}
export const getCurrentBooks = (currentPage, pageSize, filter) => {
    return (dispatch) => {
        getBooks(currentPage, pageSize, filter).then((data) => {
            dispatch(setTotalBooksCount(data.booksCount))
            dispatch(setBooks(data.books))
            dispatch(setCurrentPage(currentPage))
        })
    }
}

export const toggleBookCard = (bookId, isInCard) => {
    return (dispatch) => {
        dispatch(toggleAddToCard(bookId))
        isInCard ? removeBookFromCard(bookId) : addBookToCard(bookId) // query to back
    }
}
export const setSearchFilter = (filter) => {
    return (dispatch) => {
        dispatch(setFilter(filter))
    }
}
export default shopReducer
