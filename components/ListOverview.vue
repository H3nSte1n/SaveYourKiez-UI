<template>
  <div>
    <ListElement
      v-for="company in sortedCompanys"
      :key="company.id"
      class="mb-2"
      :headline="company.headline"
      :category="company.category"
      :distance="company.distance"
    />
  </div>
</template>

<script>
import ListElement from '~/components/ListElement'
export default {
  components: {
    ListElement
  },
  props: {
    maxDistance: {
      type: Number,
      required: true
    },
    filterCategories: {
      type: Array,
      required: true
    }
  },
  computed: {
    companysWithDistance () {
      const companysWithDistance = []
      this.$store.state.companies.forEach((el) => {
        companysWithDistance.push({
          ...el,
          distance: this.distance(el.coordinates)
        })
      })
      return companysWithDistance.filter((el) => {
        return el.distance < this.maxDistance &&
          this.filterCategories.includes(el.category)
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
