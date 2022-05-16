import CommentSection from './CommentSection'
import {
    addNewComment,
    updateNewCommentText,
    setBookComments,
    removeCommentById,
} from '../../../../../redux/commentReducer'

import { connect } from 'react-redux'
import { useEffect } from 'react'

const CommentSectionContainer = (props) => {
    const bookId = props.bookId
    useEffect(() => {
        props.setBookComments(bookId)
    }, [bookId])
    return (
        <CommentSection
            bookId={props.bookId}
            addNewComment={props.addNewComment}
            updateNewCommentText={props.updateNewCommentText}
            newCommentText={props.newCommentText}
            comments={props.comments}
            removeCommentById={props.removeCommentById}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        newCommentText: state.commentPage.newCommentText,
        comments: state.commentPage.comments,
    }
}

export default connect(mapStateToProps, {
    addNewComment,
    updateNewCommentText,
    setBookComments,
    removeCommentById,
})(CommentSectionContainer)
