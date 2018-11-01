export default {
  cart: window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
}
