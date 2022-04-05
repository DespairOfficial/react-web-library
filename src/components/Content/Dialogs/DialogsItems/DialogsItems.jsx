import React from 'react'
import styles from './DialogsItems.module.css'
import DialogItem from './DialogItem/DialogItem'

const DialogsItems = (props) => {
    let dialogItems = props.dialogItems
    return (
        <div className={styles.dialogsItems}>
            {dialogItems.map((item, i) => (
                <DialogItem name={item.name} key={i} id={item.id} />
            ))}
        </div>
    )
}
export default DialogsItems
