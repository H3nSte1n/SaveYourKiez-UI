<template>
  <div>
    <Map :locations="features"/>
  </div>
</template>

<script>
import Map from '~/components/GoogleMap.vue'

export default {
  components: {
    Map
  },
  data () {
    return {
      features: [
        {
          position: { lat: -33.91721, lng: 151.22630 },
          type: 'kiosk'
        }, {
          position: { lat: -33.91539, lng: 151.22820 },
          type: 'kiosk'
        }
      ]
    }
  }
}
</script>
