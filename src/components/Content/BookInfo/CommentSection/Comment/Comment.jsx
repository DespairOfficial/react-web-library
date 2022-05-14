import React from 'react'
import styles from './Comment.module.scss'

const Comment = (props) => {
    return (
        <div className={styles.comment}>
            <div>
                <div>
                    <p>{props.comment.name}</p>
                </div>
                <div>{props.comment.text}</div>
                <div>{props.comment.date}</div>
            </div>
            <div className={styles.remove}>
                <div
                    onClick={() => {
                        props.onRemove(props.comment.id)
                    }}
                    className={styles.close_container}
                >
                    <div className={styles.leftright}></div>
                    <div className={styles.rightleft}></div>
                    <label className={styles.close}>Remove</label>
                </div>
            </div>
        </div>
    )
}
export default Comment
