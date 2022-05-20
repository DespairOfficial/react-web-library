import React from 'react'
import styles from './CommentSection.module.css'
import Comment from './Comment/Comment'
import Preloader from '../../../../common/Preloader/Preloader'

const CommentSection = (props) => {
    let onTextAreaChange = (e) => {
        props.updateNewCommentText(e.target.value)
    }
    let onAddComment = () => {
        props.addNewComment(props.bookId, props.newCommentText)
    }
    let onRemove = (commentId) => {
        props.removeCommentById(commentId)
    }
    return (
        <div className={styles.commentSection}>
            <div className={styles.sendSection}>
                <input
                    value={props.newCommentText}
                    onChange={onTextAreaChange}
                />
                <button onClick={onAddComment}>Send</button>
            </div>
            <div>
                <div>
                    {props.comments ? (
                        props.comments.map((comment) => {
                            return (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                    onRemove={onRemove}
                                />
                            )
                        })
                    ) : (
                        <Preloader />
                    )}
                </div>
            </div>
        </div>
    )
}
export default CommentSection
