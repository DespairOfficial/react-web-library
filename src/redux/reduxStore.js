import { createStore, combineReducers } from 'redux'
import commentReducer from './commentReducer'
import dialogReducer from './dialogReducer'
import shopReducer from './shopReducer'
import readingRoomReducer from './readingRoomReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
    commentPage: commentReducer,
    dialogsPage: dialogReducer,
    shopPage: shopReducer,
    readingRoomPage: readingRoomReducer,
    auth: authReducer,
})

let store = createStore(reducers)
window.store = store
export default store
