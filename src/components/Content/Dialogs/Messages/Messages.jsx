import React from 'react'
import styles from './Messages.module.css'
import Message from './Message/Message'
import {
    updateNewMessageTextActionCreator,
    sendMessageActionCreator,
} from '../../../../redux/dialogSectionReducer'

const Messages = (props) => {
    const sendMessage = () => {
        const action = sendMessageActionCreator()
        props.dispatch(action)
    }
    const updateMessage = (e) => {
        const action = updateNewMessageTextActionCreator(e.target.value)
        props.dispatch(action)
    }

    let messages = props.messages
    return (
        <div className={styles.messages}>
            {messages.map((item, i) => (
                <Message key={i} message={item.message} />
            ))}

            <div>
                <textarea
                    value={props.newMessageText}
                    onChange={updateMessage}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Messages
