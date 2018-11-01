import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax1 = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/85801"
})
export const getLunbo = () => ajax1.get('/api/v1/shouye')
export const gettoday = () => ajax1.get('/api/v1/today')
export const getbooks = () => ajax1.get('/api/vi/books')
export const getMylist = () => ajax1.get('/api/v1/my')
export const postLogin = (username, password) => {
  return ajax1.post('/api/v1/login', {username, password})
}

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/115671'
})

ajax.interceptors.request.use((config) => {
  Indicator.open('加载中...')
  return config
})

ajax.interceptors.response.use((resp) => {
  Indicator.close()
  return resp
})

export const getDetailList = (id) => ajax.get(`api/classification/${id}`)
export const getDetail = (id) => ajax.get(`api/detail/${id}`)

