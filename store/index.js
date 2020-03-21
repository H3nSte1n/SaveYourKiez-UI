export const state = () => ({
  location: {},
  loading: false
})

export const mutations = {
  setLocation (state, payload) {
    state.location = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

export const actions = {
  setLocation ({ commit }, payload) {
    commit('setLocation', payload)
  },
  setLoading ({ commit }, payload) {
    commit('setLoading', payload)
  }
}
