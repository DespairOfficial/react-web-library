import { getFavorites, getBoughtBooks } from '../http/booksAPI'
const GET_FAVORITE_BOOKS = `GET-FAVORITE-BOOKS`
const GET_BOUGHT_BOOKS = 'GET-BOUGHT-BOOKS'
const initialState = {
    books: [],
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITE_BOOKS: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.books = action.books
            return newState
        }
        case GET_BOUGHT_BOOKS: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.books = action.books
            return newState
        }
        default: {
            return { ...state }
        }
    }
}
const getFavotiteUsersBooks = (books) => {
    return {
        type: GET_FAVORITE_BOOKS,
        books,
    }
}
const getBoughtUsersBooks = (books) => {
    return {
        type: GET_BOUGHT_BOOKS,
        books,
    }
}
export const getFavoriteBooks = () => {
    return (dispatch) => {
        getFavorites().then((data) => {
            dispatch(getFavotiteUsersBooks(data.books))
        })
    }
}
export const getCurrentBoughtBooks = () => {
    return (dispatch) => {
        getBoughtBooks().then((data) => {
            dispatch(getBoughtUsersBooks(data.booksBought))
        })
    }
}
export default profileReducer
