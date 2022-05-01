import { createStore, combineReducers, applyMiddleware } from 'redux'
import commentReducer from './commentReducer'
import dialogReducer from './dialogReducer'
import shopReducer from './shopReducer'
import readingRoomReducer from './readingRoomReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    commentPage: commentReducer,
    dialogsPage: dialogReducer,
    shopPage: shopReducer,
    readingRoomPage: readingRoomReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store
