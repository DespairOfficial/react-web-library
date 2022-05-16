import React from 'react'
import styles from './Messages.module.css'
import Message from './Message/Message'

const Messages = (props) => {
    const onSendMessage = () => {
        props.sendMessage()
    }
    const onUpdateMessage = (e) => {
        props.updateMessage(e.target.value)
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
                    onChange={onUpdateMessage}
                />
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Messages
