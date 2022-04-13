import { createStore, combineReducers } from 'redux'
import commentReducer from './commentReducer'
import dialogReducer from './dialogReducer'
import shopReducer from './shopReducer'

let reducers = combineReducers({
    commentPage: commentReducer,
    dialogsPage: dialogReducer,
    shop: shopReducer,
})

let store = createStore(reducers)

export default store
