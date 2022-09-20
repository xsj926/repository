import axios from "axios";

const request = axios.create({
    baseURL: "https://beta.ptcgvip.com",
    timeout: 5000
})

request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data
        } else {
            return Promise.reject('请求错误！')
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default request