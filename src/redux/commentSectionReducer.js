const ADD_COMMENT = 'ADD-COMMENT'
const CHANGE_NEW_COMMENT_TEXT = 'CHANGE-NEW-COMMENT-TEXT'

const commentReducer = (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            state.comments.push({
                id: 2,
                author: 'BILLY',
                text: state.newCommentText,
            })
            state.newCommentText = ''
            return state

        case CHANGE_NEW_COMMENT_TEXT:
            state.newCommentText = action.commentText
            return state
        default:
            return state
    }
}

export const addCommentActionCreator = () => {
    return { type: ADD_COMMENT }
}

export const updateNewCommentTextActionCreator = (text) => {
    return { type: CHANGE_NEW_COMMENT_TEXT, commentText: text }
}

export default commentReducer
