<template>
  <div>
    <gmap-autocomplete class="locationSelection" @place_changed="setPlace">
      <template v-slot:input="slotProps">
        <v-text-field
          ref="input"
          primary
          outlined
          prepend-inner-icon="place"
          placeholder="Location Of Event"
          @listeners="slotProps.listeners"
          @attrs="slotProps.attrs"
        />
      </template>
    </gmap-autocomplete>
    <v-btn @click="useLocation">
      Standort erkennen
    </v-btn>
    <v-slider
      v-model="maxDistance"
      min="0"
      max="50000"
      label="Maximale Distanz"
      :thumb-size="48"
      :thumb-label="true"
    >
      <template v-slot:thumb-label="{ value }">
        {{ Math.round(value / 1000) }}km
      </template>
    </v-slider>
    <v-row justify="space-around">
      <span v-for="(cat, index) in categories" :key="index">
        <v-checkbox
          v-model="filterCategories"
          :label="cat"
          :value="cat"
        />
      </span>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxDistance: 10000,
      filterCategories: ['cafe', 'bar', 'shop', 'coiffeur', 'kiosk', 'food', 'club']
    }
  },
  computed: {
    categories () {
      const mappedCategories = this.$store.state.companies.map(c => c.category)
      return [...new Set(mappedCategories)]
    }
  },
  watch: {
    maxDistance () {
      this.$emit('max-distance', this.maxDistance)
    },
    filterCategories () {
      this.$emit('filter-categories', this.filterCategories)
    }
  },
  mounted () {
    this.$emit('max-distance', this.maxDistance)
    this.$emit('filter-categories', this.filterCategories)
  },
  methods: {
    useLocation () {
      this.$emit('location')
    },
    setPlace (place) {
      const currentPlace = {
        coords: {
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng()
        }
      }
      this.$store.dispatch('setLocation', currentPlace)
    }
  }
}
</script>

<style scoped lang="scss">
.locationSelection {
  width: 100%;
  text-align: center;
  max-width: 600px;
  padding: 10px 0;
  margin: 0 auto 20px auto;
}
</style>
