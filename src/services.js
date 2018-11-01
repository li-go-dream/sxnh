import axios from 'axios'
import { Indicator } from 'mint-ui'

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
