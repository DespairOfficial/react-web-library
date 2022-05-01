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
    return {
        addComment: () => {
            dispatch(addCommentActionCreator())
        },
        onCommentChange: (text) => {
            dispatch(updateNewCommentTextActionCreator(text))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentSection)
