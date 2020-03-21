export const state = () => ({
  location: {}
})

export const mutations = {
  setLocation (state, payload) {
    state.location = payload
  }
}

export const actions = {
  setLocation ({ commit }, payload) {
    commit('setLocation', payload)
  }
}
