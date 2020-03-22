<template>
  <div>
    <div>
      <slot />
    </div>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 100vh;"
      :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
    >
      <gmap-info-window :options="infoWindow.infoOptions" :position="infoWindow.infoWindowPosition" :opened="infoWindow.infoWindowOpenStatus" @closeclick="infoWindow.infoWindowOpenStatus=false">
        <geo-info-box v-if="currentIndex != null" :company-infos="companyInfos" :current-index="currentIndex" />
      </gmap-info-window>
      <gmap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :icon="marker.icon"
        :clickable="true"
        :animation="2"
        @click="toggleInfoWindow(marker,index)"
      />
    </gmap-map>
  </div>
</template>

<script>
import GeoInfoBox from './GeoInfobox'

export default {
  name: 'GoogleMap',
  components: {
    GeoInfoBox
  },
  props: {
    locations: {
      type: Array,
      default: () => [] // array with objects
    },
    companyInfos: {
      type: Array,
      default: () => [] // companyName, companyDesc, img, button
    }
  },
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: -33.91747, lng: 151.22912 },
      places: [],
      currentPlace: null,
      infoWindow: {
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        infoWindowPosition: null,
        infoWindowOpenStatus: false
      },
      currentIndex: null,
      icons: {
        kiosk: {
          icon: '/food-kategory-icon.png'
        },
        bar: {
          icon: '/bar-kategory-icon.png'
        },
        supermarket: {
          icon: 'info-i_maps.png'
        },
        bookmarket: {
          icon: 'info-i_maps.png'
        }
      }
    }
  },
  computed: {
    location () {
      return this.$store.state.location
    },
    markers () {
      const markerArray = []
      this.locations.forEach((e) => {
        markerArray.push({
          position: e.position,
          icon: this.icons[e.type].icon
        })
      })
      return markerArray
    }
  },
  mounted () {
    console.log(this.location)
    this.geolocate()
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    updatePosition () {
      if (this.currentPlace) {
        this.currentPlace = null
        const currentPosition = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.center = currentPosition
      }
    },
    geolocate () {
      console.log('locationMap', this.location)
      if (this.$store.state.location.coords) {
        this.center = {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
      } else {

      }
    },
    toggleInfoWindow (marker, i) {
      this.infoWindow.infoWindowPosition = marker.position

      if (this.currentIndex === i) {
        this.infoWindow.infoWindowOpenStatus = !this.infoWindow.infoWindowOpenStatus
      } else {
        this.infoWindow.infoWindowOpenStatus = true
        this.currentIndex = i
      }
    }
  }
}
</script>

<style scoped class="scss">
.test {
  width: 100%;
  text-align: center;
  max-width: 600px;
  padding: 10px 0;
  border-bottom: 1px solid black;
}

</style>
