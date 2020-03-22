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
      <Filter-Companies
        @location="useLocation"
        @max-distance="setMaxDistance"
        @filter-categories="setFilterCategories"
      />
      <v-switch v-model="listView">
        Toogle View
      </v-switch>
      <ListOverview
        v-if="listView"
        :max-distance="maxDistance"
        :filter-categories="filterCategories"
      />
      <Google-Map v-if="!listView" />
    </v-flex>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-layout>
</template>

<script>
import getPosition from '~/plugins/geolocation'
import ListOverview from '~/components/ListOverview'
import GoogleMap from '~/components/GoogleMap'
import FilterCompanies from '~/components/FilterCompanies'

export default {
  components: {
    ListOverview,
    FilterCompanies,
    GoogleMap
  },
  data () {
    return {
      maxDistance: 0,
      listView: true,
      filterCategories: []
    }
  },
  computed: {
    location () {
      return this.$store.state.location
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    setMaxDistance (payload) {
      this.maxDistance = payload
    },
    setFilterCategories (payload) {
      this.filterCategories = payload
    },
    useLocation () {
      this.$store.dispatch('setLoading', true)
      getPosition(this.saveToStore)
    },
    saveToStore (pos) {
      this.$store.dispatch('setLocation', pos)
      this.$store.dispatch('setLoading', false)
    }
  }
}
</script>
