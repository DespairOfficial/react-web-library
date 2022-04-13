import React from 'react'
import styles from './CommentSection.module.css'
import Comment from './Comment/Comment'

const CommentSection = (props) => {
    let onTextAreaChange = (e) => {
        props.onCommentChange(e.target.value)
    }
    let onAddComment = () => {
        props.addComment()
    }
    return (
        <div className={styles.commentSection}>
            <div className={styles.sendSection}>
                <textarea
                    value={props.newCommentText}
                    onChange={onTextAreaChange}
                />
                <button onClick={onAddComment}>Send</button>
            </div>
            <div>
                {props.comments.map((comment, i) => {
                    return (
                        <Comment
                            key={i}
                            author={comment.author}
                            text={comment.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default CommentSection
