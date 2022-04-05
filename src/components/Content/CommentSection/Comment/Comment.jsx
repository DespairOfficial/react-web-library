import React from 'react'
import styles from './Comment.module.css'

const Comment = (props) => {
    return (
        <div className={styles.comment}>
            <div>
                <p>{props.author}</p>
            </div>
            <div>{props.text}</div>
        </div>
    )
}
export default Comment
