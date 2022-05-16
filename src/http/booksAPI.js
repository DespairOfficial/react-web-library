import { $authHost } from './index'
export const getBooks = (currentPage, pageSize, filter) => {
    return $authHost // returning data, after waiting promise
        .get(`/books?page=${currentPage}&limit=${pageSize}&filter=${filter}`)
        .then((response) => response.data)
}

export const getBookData = (bookId) => {
    return $authHost.get(`/books/${bookId}`).then((response) => response.data)
}
export const getPdf = (bookId) => {
    return $authHost
        .get(`/books/pdf/${bookId}`, {
            responseType: 'arraybuffer',
        })
        .then((response) => {
            return response.data
        })
}

export const addBookToCard = (bookId) => {
    return $authHost
        .post(`/books/toCard`, {
            bookId,
        })
        .then((response) => response.data)
}
export const removeBookFromCard = (bookId) => {
    return $authHost
        .delete(`/books/toCard/${bookId}`)
        .then((response) => response.data)
}
export const rateBook = (bookId, rating) => {
    return $authHost
        .post(`/books/rate`, {
            bookId,
            rating,
        })
        .then((response) => {
            return response.data
        })
}

export const getBookRating = (bookId) => {
    return $authHost.get(`/books/rating/${bookId}`).then((response) => {
        return response.data
    })
}
export const buyBook = (bookId) => {
    return $authHost.get(`/books/buyBook/${bookId}`).then((response) => {
        return response.data
    })
}
export const getBougthBooks = () => {
    return $authHost.get(`/books/bought`).then((response) => {
        return response.data
    })
}
export const leaveAComment = (bookId, commentText) => {
    return $authHost
        .post(`/books/comments/${bookId}`, { commentText: commentText })
        .then((response) => {
            return response.data
        })
}
export const getCommentsByBook = (bookId) => {
    return $authHost.get(`/books/comments/${bookId}`).then((response) => {
        return response.data
    })
}
export const removeBookCommentById = (commentId) => {
    return $authHost.delete(`/books/comments/${commentId}`).then((response) => {
        return response.data
    })
}
