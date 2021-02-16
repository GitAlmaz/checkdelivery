import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		delivery: [],
    error: '',
    checked: ''
	},
	actions: {
		async fetchDelivery({ commit }, payload) {
			try {
				const city = payload.toLowerCase()
				const res = await fetch(`https://qvjgl.mocklab.io/delivery/check?search=${city}`)
				const data = await res.json()
        if (res.ok) {
          commit('setDelivery', data)
          commit('setError', '')
        }
			} catch (error) {
        commit('setError', 'We didn’t found such city. Please check spelling')
        commit('setDelivery', [])
      }
		}
	},
	mutations: {
		setDelivery(state, payload) {
			state.delivery = payload
		},
    setError(state, payload) {
      state.error = payload
    },
    clearDelivery(state) {
      state.delivery = []
    },
    setChecked(state, payload) {
      state.checked = payload
    }
	},
	getters: {
		getDelivery(state) {
			return state.delivery
		},
    getError(state) {
      return state.error
    },
    getCurrent(state) {
      return state.checked
    }
	},
	modules: {}
})
