import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItemsContainer from './DialogsItems/DialogsItemsContainer'
import MessagesContainer from './Messages/MessagesContainer'

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <DialogsItemsContainer />
            <MessagesContainer />
        </div>
    )
}
export default Dialogs
