const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText
            return state
        case SEND_MESSAGE:
            state.messages.push({
                id: 2,
                message: state.newMessageText,
            })
            state.newMessageText = ''
            return state
        default:
            return state
    }
}
export default dialogReducer
