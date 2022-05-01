import { $host, $authHost } from './index'
import jwt_decode from 'jwt-decode'
export const registration = async (email, password, username) => {
    const { data } = await $host.post('/auth/registration', {
        email,
        password,
        username,
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password, username) => {
    const { data } = await $host.post('/auth/login', {
        email,
        password,
        username,
    })
    localStorage.setItem('token', data.token)
    const decodedData = jwt_decode(data.token)
    return decodedData
}
export const check = async () => {
    const { data } = await $authHost.post('/auth/users', {})
    return jwt_decode(data.token)
}
