const ADD_COMMENT = 'ADD-COMMENT'
const CHANGE_NEW_COMMENT_TEXT = 'CHANGE-NEW-COMMENT-TEXT'

let initialState = {
    comments: [
        {
            id: 0,
            author: 'Eugenue',
            text: "This book is plohaya, mne don't nravica it",
        },
        {
            id: 1,
            author: 'Ivan Temnoholmov',
            text: "Oh, yeah, don't stop!",
        },
    ],
    newCommentText: 'Semen Evgenuenivch',
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            return {
                ...state,
                newCommentText: '',
                comments: [
                    ...state.comments,
                    {
                        id: 2,
                        author: 'BILLY',
                        text: state.newCommentText,
                    },
                ],
            }
        }
        case CHANGE_NEW_COMMENT_TEXT: {
            return { ...state, newCommentText: action.commentText }
        }
        default:
            return { ...state }
    }
}

export const addCommentActionCreator = () => {
    return { type: ADD_COMMENT }
}

export const updateNewCommentTextActionCreator = (text) => {
    return { type: CHANGE_NEW_COMMENT_TEXT, commentText: text }
}

export default commentReducer
