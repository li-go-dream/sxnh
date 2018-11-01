export default {
  isLogin: Boolean(window.localStorage.getItem('token')),
  cart: window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
}
