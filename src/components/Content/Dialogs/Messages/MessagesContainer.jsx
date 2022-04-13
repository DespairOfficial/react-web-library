import Messages from './Messages'
import {
    updateNewMessageTextActionCreator,
    sendMessageActionCreator,
} from '../../../../redux/dialogReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer
