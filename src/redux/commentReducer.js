import {
    leaveAComment,
    getCommentsByBook,
    removeBookCommentById,
} from '../http/booksAPI'
const ADD_COMMENT = 'ADD-COMMENT'
const CHANGE_NEW_COMMENT_TEXT = 'CHANGE-NEW-COMMENT-TEXT'
const SET_COMMENTS = 'SET-COMMENTS'
const REMOVE_COMMENT_BY_ID = 'REMOVE-COMMENT-BY-ID'

let initialState = {
    comments: [],
    newCommentText: '',
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            const newState = JSON.parse(JSON.stringify(state))
            const newComment = {
                id: action.newComment.id,
                date: action.newComment.date,
                role: action.newComment.role,
                name: action.newComment.name,
                text: action.newComment.text,
            }
            newState.comments.push(newComment)
            newState.newCommentText = ''

            return newState
        }
        case CHANGE_NEW_COMMENT_TEXT: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.newCommentText = action.commentText
            return newState
        }
        case SET_COMMENTS: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.comments = action.comments.comments
            return newState
        }
        case REMOVE_COMMENT_BY_ID: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.comments = state.comments.filter(
                (item) => item.id !== action.commentId
            )
            return newState
        }
        default:
            return { ...state }
    }
}

const addComment = (newComment) => {
    return { type: ADD_COMMENT, newComment }
}
const setComments = (comments) => {
    return { type: SET_COMMENTS, comments }
}
const updateNewCommentTextAC = (text) => {
    return { type: CHANGE_NEW_COMMENT_TEXT, commentText: text }
}
const removeComment = (commentId) => {
    return { type: REMOVE_COMMENT_BY_ID, commentId }
}

export const addNewComment = (bookId, text) => {
    return (dispatch) => {
        leaveAComment(bookId, text).then((data) => {
            dispatch(addComment(data.newComment))
        })
    }
}
export const setBookComments = (bookId) => {
    return (dispatch) => {
        getCommentsByBook(bookId).then((comments) => {
            dispatch(setComments(comments))
        })
    }
}
export const updateNewCommentText = (text) => {
    return (dispatch) => {
        dispatch(updateNewCommentTextAC(text))
    }
}
export const removeCommentById = (commentId) => {
    return (dispatch) => {
        removeBookCommentById(commentId).then((data) => {
            if (data.status === 0) {
                dispatch(removeComment(commentId))
            } else {
                alert('Вы не можете удалить этот комментарий')
            }
        })
    }
}
export default commentReducer
