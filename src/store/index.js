import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const syncStorage = store => store.subscribe((mutation, s) => {
  const cart = JSON.stringify(s.cart)
  window.localStorage.setItem('cart', cart)
})

const plugins = [syncStorage]

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins
})
