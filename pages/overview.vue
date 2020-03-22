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
      <Filter-Companies />
      <ListOverview v-if="viewToggle" />
      <Google-Map v-if="!viewToggle" :locations="features" :company-infos="companyInfos" />
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
      viewToggle: true,
      features: [
        {
          position: { lat: -33.91721, lng: 151.22630 },
          type: 'kiosk'
        }, {
          position: { lat: -33.91539, lng: 151.22820 },
          type: 'kiosk'
        }
      ],
      companyInfos: [
        {
          name: 'Name',
          desc: 'asdjajksdnjk ankjdn ajksldklasjn djkasn jkdans kjdn kajsn dklasn dklnas kldna kslnd klasn kldnas klnd klasn dklnsa kldnska lnd klasn dklanskl dnklas ndkln skl',
          link: '/'
        },
        {
          name: 'Name 123123',
          desc: 'asdjajksdnjk ankjdn ajksldklasjn djkasn jkdans kjdn kajsn dklasn dklnas kldna kslnd klasn kldnas klnd klasn dklnsa kldnska lnd klasn dklanskl dnklas ndkln skl',
          link: '/'
        }
      ]
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
