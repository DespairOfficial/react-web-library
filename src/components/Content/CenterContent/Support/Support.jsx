import React from 'react'
import MessagesContainer from './Messages/MessagesContainer'
import styles from './Support.module.css'
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <MessagesContainer />
        </div>
    )
}
export default Dialogs
