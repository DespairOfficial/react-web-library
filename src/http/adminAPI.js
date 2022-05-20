import { $authHost } from './index'

export const getUsers = () => {
    return $authHost.get('/admin/users').then((response) => {
        return response.data
    })
}
export const getBoughtBooksUsers = () => {
    return $authHost.get('/admin/booksBought').then((response) => {
        return response.data
    })
}
export const getBooksRating = () => {
    return $authHost.get('/admin/rating').then((response) => {
        return response.data
    })
}
