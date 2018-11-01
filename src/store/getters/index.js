export default {
  totalPrice (state) {
    return state.cart.reduce((result, item) => {
      result += item.price * item.count
      return result
    }, 0)
  },
  totalCount (state) {
    return state.cart.reduce((result, item) => {
      result += item.count
      return result
    }, 0)
  }
}
