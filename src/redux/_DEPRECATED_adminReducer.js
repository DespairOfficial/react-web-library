const GET_USERS = 'GET-USERS'

const initialState = {}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}
export default adminReducer
