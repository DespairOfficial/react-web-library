const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    email: null,
    username: null,
    isFetching: true,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.userData, isAuth: true }
        }
        default: {
            return { ...state }
        }
    }
}
export const setUserData = (userData) => ({ type: SET_USER_DATA, userData })
export default authReducer
