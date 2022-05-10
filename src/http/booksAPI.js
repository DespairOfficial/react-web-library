import { $authHost } from './index'
export const getBooks = (currentPage, pageSize) => {
    return $authHost // returning data, after waiting promise
        .get(`/books?page=${currentPage}&limit=${pageSize}`)
        .then((response) => response.data)
}

export const getBook = (bookId) => {
    return $authHost.get(`/books/${bookId}`).then((response) => response.data)
}
export const getPdf = (bookId, isShort) => {
    return $authHost
        .get(`/books/pdf/${bookId}?isShort=${isShort}`, {
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
