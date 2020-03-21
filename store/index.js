export const state = () => ({
  location: {},
  loading: false,
  companies: [
    {
      id: 1,
      headline: 'Cafe123',
      category: 'Bar',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      key: 'test',
      coordinates: {
        latitude: 50.751802,
        longitude: 7.090266
      }
    },
    {
      id: 9,
      headline: 'Schnittchen',
      category: 'Friseur',
      coordinates: {
        latitude: 50.7413,
        longitude: 7.090226
      }
    },
    {
      id: 8,
      headline: 'Café Frida',
      category: 'Café',
      coordinates: {
        latitude: 50.7413,
        longitude: 7.020226
      }
    },
    {
      id: 4,
      headline: 'Kio',
      category: 'Kiosk',
      coordinates: {
        latitude: 50.151802,
        longitude: 7.00266
      }
    },
    {
      id: 2,
      headline: 'Frittebud',
      category: 'Food',
      coordinates: {
        latitude: 50.651802,
        longitude: 6.990266
      }
    },
    {
      id: 3,
      headline: 'Vapiano',
      category: 'Food',
      coordinates: {
        latitude: 50.751805,
        longitude: 7.123296
      }
    }
  ]
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
