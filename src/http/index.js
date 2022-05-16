import axios from 'axios'

const API_URL = 'http://localhost:3001'

const $host = axios.create({ baseURL: API_URL })
const $authHost = axios.create({ baseURL: API_URL }) //instance

const authIntercetpor = (config) => {
    const token = localStorage.getItem('token')
    config.headers.authorization = `Bearer ${token}`
    return config
}
$authHost.interceptors.request.use(authIntercetpor)
export { $host, $authHost }
