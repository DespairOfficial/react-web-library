import React from 'react'
import styles from './CommentSection.module.css'
import Comment from './Comment/Comment'
import {
    addCommentActionCreator,
    updateNewCommentTextActionCreator,
} from '../../../redux/state'

const CommentSection = (props) => {
    const action = addCommentActionCreator()
    const addComment = () => {
        props.dispatch(action)
    }
    const onTextAreaCheange = () => {
        let text = newCommentArea.current.value
        const action = updateNewCommentTextActionCreator(text)
        props.dispatch(action)
    }

    let newCommentArea = React.createRef()

    return (
        <div className={styles.commentSection}>
            <div className={styles.sendSection}>
                <textarea
                    ref={newCommentArea}
                    value={props.state.newCommentText}
                    onChange={onTextAreaCheange}
                />
                <button onClick={addComment}>Send</button>
            </div>
            <div>
                {props.state.comments.map((comment, i) => {
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
