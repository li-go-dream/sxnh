import { postLogin as login } from '../../services.js'
export default{
  postLogin (store, action) {
    console.log(action)
    login(action.username, action.password)
      .then(resp => {
        const token = resp.data.data.token
        store.commit('postLogin', token)
      })
  }
}
