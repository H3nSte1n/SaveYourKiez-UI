<template>
  <v-layout
    justify-center
  >
    <v-flex
      xs12
      sm10
      md8
    >
      <div class="text-center">
        <div v-if="location.coords">
          <p>Breitengrad: {{ location.coords.latitude }}</p>
          <p>Längengrad: {{ location.coords.longitude }}</p>
        </div>
      </div>
      <ListOverview />
    </v-flex>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-layout>
</template>

<script>
import getPosition from '~/plugins/geolocation'
import ListOverview from '~/components/ListOverview'

export default {
  components: {
    ListOverview
  },
  computed: {
    location () {
      return this.$store.state.location
    },
    loading () {
      return this.$store.state.loading
    }
  },
  mounted () {
    if (!this.$store.state.location.coords) {
      this.$store.dispatch('setLoading', true)
      getPosition(this.saveToStore)
    }
  },
  methods: {
    saveToStore (pos) {
      this.$store.dispatch('setLocation', pos)
      this.$store.dispatch('setLoading', false)
    }
  }
}
</script>
