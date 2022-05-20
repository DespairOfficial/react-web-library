import { login, registration } from '../http/userAPI'
const SET_USER_DATA = 'SET-USER-DATA'
const SET_AUTH = 'SET-AUTH'
const LOG_OUT = 'LOG_OUT'
let initialState = {
    email: null,
    username: null,
    isFetching: true,
    role: null,
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
                role: null,
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
    return { type: LOG_OUT }
}
export const setCurrentUserData = (userData, isLogin) => {
    return (dispatch) => {
        ;(isLogin
            ? login(userData.email, userData.password, userData.username)
            : registration(userData.email, userData.password, userData.username)
        )
            .then((data) => {
                dispatch(
                    setUserData({
                        email: data.email,
                        username: userData.username,
                        role: data.role,
                    })
                )
            })
            .catch((error) => {
                alert(error.response.data.message)
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
