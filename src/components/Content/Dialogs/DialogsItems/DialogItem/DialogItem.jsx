import React from 'react'
import styles from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    return (
        <div className={styles.dialogItem}>
            <NavLink
                className={(navData) =>
                    navData.isActive ? styles.active : styles.dialogItem
                }
                to={'/dialogs/' + props.id}
            >
                {props.name}
            </NavLink>
        </div>
    )
}
export default Dialog
