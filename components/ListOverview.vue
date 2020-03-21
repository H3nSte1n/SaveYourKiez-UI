<template>
  <div>
    <v-slider
      v-model="maxDistance"
      min="0"
      max="100000"
      label="Maximale Distanz"
      :thumb-size="48"
      :thumb-label="true"
    >
      <template v-slot:thumb-label="{ value }">
        {{ Math.round(value / 1000) }}km
      </template>
    </v-slider>
    <ListElement
      v-for="company in sortedCompanys"
      :key="company.id"
      class="mb-2"
      :headline="company.headline"
      :category="company.category"
      :distance="company.distance"
    />
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </div>
</template>

<script>
import ListElement from '~/components/ListElement'
export default {
  components: {
    ListElement
  },
  data () {
    return {
      maxDistance: 15000,
      companys: [
        {
          id: 1,
          headline: 'Cafe123',
          category: 'Bar',
          coordinates: {
            latitude: 50.751802,
            longitude: 7.090266
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
          category: 'Restaurant',
          coordinates: {
            latitude: 50.651802,
            longitude: 6.990266
          }
        },
        {
          id: 3,
          headline: 'Vapiano',
          category: 'Restaurant',
          coordinates: {
            latitude: 50.751805,
            longitude: 7.123296
          }
        }
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    },
    companysWithDistance () {
      const companysWithDistance = []
      this.companys.forEach((el) => {
        companysWithDistance.push({
          ...el,
          distance: this.distance(el.coordinates)
        })
      })
      return companysWithDistance.filter((el) => {
        return el.distance < this.maxDistance
      })
    },
    sortedCompanys () {
      return this.sortArrayByKey(this.companysWithDistance, 'distance')
    }
  },
  methods: {
    sortArrayByKey (arr, key) {
      return arr.sort((a, b) => {
        if (a[key] < b[key]) { return -1 }
        if (a[key] > b[key]) { return 1 }
        return 0
      })
    },
    distance (c) {
      const userLocation = this.$store.state.location.coords
      const lat2 = userLocation ? userLocation.latitude : 0
      const lon2 = userLocation ? userLocation.longitude : 0
      const R = 6371e3
      const r1 = this.toRadians(c.latitude)
      const r2 = this.toRadians(lat2)
      const delta1 = this.toRadians(lat2 - c.latitude)
      const delta2 = this.toRadians(lon2 - c.longitude)
      const a = Math.sin(delta1 / 2) * Math.sin(delta1 / 2) +
            Math.cos(r1) * Math.cos(r2) *
            Math.sin(delta2 / 2) * Math.sin(delta2 / 2)
      const multiplicator = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      const beforeRound = R * multiplicator
      const withoutUnit = Math.round(beforeRound / 100) * 100
      return withoutUnit
    },
    toRadians (degrees) {
      const pi = Math.PI
      return degrees * (pi / 180)
    }
  }
}
</script>
