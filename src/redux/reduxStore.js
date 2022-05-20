import { createStore, combineReducers, applyMiddleware } from 'redux'
import commentReducer from './commentReducer'
import dialogReducer from './dialogReducer'
import shopReducer from './shopReducer'
import readingRoomReducer from './readingRoomReducer'
import authReducer from './authReducer'
import sideBarReducer from './sidebarReducer'
import thunkMiddleware from 'redux-thunk'
import buyBookReducer from './buyBookReducer'
import BookInfoReducer from './bookInfoReducer'
import donationReducer from './donationReducer'
import adminReducer from './_DEPRECATED_adminReducer'
let reducers = combineReducers({
    commentPage: commentReducer,
    dialogsPage: dialogReducer,
    shopPage: shopReducer,
    readingRoomPage: readingRoomReducer,
    auth: authReducer,
    sidebar: sideBarReducer,
    buyBook: buyBookReducer,
    bookInfo: BookInfoReducer,
    donation: donationReducer,
    admin: adminReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store
