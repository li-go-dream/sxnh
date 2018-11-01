import types from '../mutationsTypes'
export default {
  [types.ADDCOUNT] (state, id) {
    state.cart.map(item => {
      if (item.id === id) {
        item.count += 1
      }
      return item
    })
  },
  [types.REDUCECOUNT] (state, id) {
    state.cart.map(item => {
      if (item.id === id) {
        if (item.count > 1) {
          item.count -= 1
        } else {
          state.cart = state.cart.filter(item => item.id !== id)
        }
      }
      return state.cart
    })
  },
  [types.ADD_TO_CART] (state, cartItem) {
    const isInCart = state.cart.some(item => item.id === cartItem.id)
    if (isInCart) {
      state.cart = state.cart.map((item) => {
        const newItem = item
        if (newItem.id === cartItem.id) {
          newItem.count += 1
        }
        return newItem
      })
    } else {
      state.cart.push({
        ...cartItem,
        count: 1
      })
    }
  }
}
