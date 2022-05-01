import { $authHost } from './index'
export const getBooks = async (currentPage, pageSize) => {
    return await $authHost // returning data, after waiting promise
        .get(`/books?page=${currentPage}&limit=${pageSize}`)
        .then((response) => response.data)
}

export const getBook = async (bookId) => {
    return await $authHost
        .get(`/books/${bookId}`)
        .then((response) => response.data)
}

export const addBookToCard = async (bookId) => {
    return await $authHost
        .post(`/books/toCard`, {
            bookId,
        })
        .then((response) => response.data)
}
export const removeBookFromCard = async (bookId) => {
    return await $authHost
        .delete(`/books/toCard/${bookId}`)
        .then((response) => response.data)
}
