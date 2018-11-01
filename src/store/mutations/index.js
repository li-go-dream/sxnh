
export default {
  postLogin (state, token) {
    state.isLogin = true
    window.localStorage.setItem('token', token)
  },
  logout (state) {
    state.isLogin = false
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
  }
}
