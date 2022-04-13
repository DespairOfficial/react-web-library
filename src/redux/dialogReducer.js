const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogItems: [
        { id: 0, name: 'Billy' },
        { id: 1, name: 'Van' },
    ],
    messages: [
        { id: 0, message: 'Screw you guys' },
        { id: 1, message: "Oh yeah don't stop" },
    ],
    newMessageText: 'Semen',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return { ...state, newMessageText: action.messageText }
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 2,
                        message: state.newMessageText,
                    },
                ],
                newMessageText: '',
            }
        }
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, messageText: text }
}

export const sendMessageActionCreator = () => {
    return { type: SEND_MESSAGE }
}

export default dialogReducer
