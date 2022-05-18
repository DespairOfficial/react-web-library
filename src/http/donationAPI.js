import { $authHost } from './index'
export const donate = (value) => {
    return $authHost
        .post(`/donate`, { value: value })
        .then((response) => response.data)
}

export const getSumOfFees = (value) => {
    return $authHost
        .get(`/donate`, { value: value })
        .then((response) => response.data)
}
