import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const syncStorage = store => store.subscribe((mutation, s) => {
  const cart = JSON.stringify(s.cart)
  window.localStorage.setItem('cart', cart)
})

const plugins = [syncStorage]

export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations,
  plugins

})
