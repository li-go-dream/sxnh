import axios from 'axios'

const ajax = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/85801"
})
export const getLunbo = () => ajax.get('/api/v1/shouye')
export const gettoday = () => ajax.get('/api/v1/today')
export const getbooks = () => ajax.get('/api/vi/books')
export const getMylist = () => ajax.get('/api/v1/my')
export const postLogin = (username, password) => {
  return ajax.post('/api/v1/login', {username, password})
}
