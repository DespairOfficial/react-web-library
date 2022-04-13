import CommentSection from './CommentSection'
import {
    addCommentActionCreator,
    updateNewCommentTextActionCreator,
} from '../../../redux/commentReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        newCommentText: state.commentPage.newCommentText,
        comments: state.commentPage.comments,
    }
}

let mapDispatchToProps = (dispatch) => {
    // dispatch is bounded: store.dispatch.bind(store)
    return {
        addComment: () => {
            dispatch(addCommentActionCreator())
        },
        onCommentChange: (text) => {
            dispatch(updateNewCommentTextActionCreator(text))
        },
    }
}
const CommentSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentSection)

export default CommentSectionContainer
