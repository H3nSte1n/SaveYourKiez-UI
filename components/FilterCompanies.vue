<template>
  <div>
    <gmap-autocomplete @place_changed="setPlace">
      <template v-slot:input="slotProps">
        <v-text-field
          ref="input"
          outlined
          prepend-inner-icon="place"
          placeholder="Location Of Event"
          @listeners="slotProps.listeners"
          @attrs="slotProps.attrs"
        />
      </template>
    </gmap-autocomplete>
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
      <v-checkbox
        v-for="(cat, index) in categories"
        :key="index"
        v-model="filterCategories"
        :label="cat"
        :value="cat"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxDistance: null,
      // categories: ['Bar', 'Food', 'Café', 'Kiosk', 'Friseur'],
      filterCategories: ['Bar', 'Food', 'Café', 'Kiosk', 'Friseur']
    }
  },
  mounted () {
    this.maxDistance = this.$store.state.maxDistance
  },
  watch: {
    maxDistance () {
      this.$store.dispatch('setMaxDistance', this.maxDistance)
      console.log(this.$store.state.maxDistance)
      this.$store.dispatch('setLoading', false)
    }
  },
  computed: {
    categories () {
      const mappedCategories = this.$store.state.companies.map(c => c.category)
      return [...new Set(mappedCategories)]
    }
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place.geometry.location
    }
  }
}
</script>
