import { login, registration } from '../http/userAPI'
const SET_USER_DATA = 'SET-USER-DATA'
const SET_AUTH = 'SET-AUTH'
const LOG_OUT = 'LOG_OUT'
let initialState = {
    email: null,
    username: null,
    isFetching: true,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData,
                isAuth: true,
                isFetching: false,
            }
        }
        case SET_AUTH: {
            return { ...state, isAuth: action.isAuth }
        }
        case LOG_OUT: {
            return {
                ...state,
                email: null,
                username: null,
                isFetching: true,
                isAuth: false,
            }
        }
        default: {
            return { ...state }
        }
    }
}
const setUserData = (userData) => {
    return { type: SET_USER_DATA, userData }
}
const setAuth = (isAuth) => {
    return { type: SET_AUTH, isAuth }
}
const LogOut = () => {
    debugger
    return { type: LOG_OUT }
}
export const setCurrentUserData = (userData, isLogin) => {
    return (dispatch) => {
        ;(isLogin
            ? login(userData.email, userData.password, userData.username)
            : registration(userData.email, userData.password, userData.username)
        ).then(() => {
            dispatch(
                setUserData({
                    email: userData.email,
                    username: userData.username,
                })
            )
        })
    }
}
export const checkIsAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem('token')) {
            dispatch(setAuth(true))
            return true
        } else {
            dispatch(setAuth(false))
            return false
        }
    }
}
export const logOut = () => {
    return (dispatch) => {
        localStorage.removeItem('token')

        dispatch(LogOut())
    }
}
export default authReducer
