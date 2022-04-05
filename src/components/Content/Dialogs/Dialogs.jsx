import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItems from './DialogsItems/DialogsItems'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <DialogsItems dialogItems={props.dialogSection.dialogItems} />
            <Messages
                messages={props.dialogSection.messages}
                newMessageText={props.dialogSection.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Dialogs
