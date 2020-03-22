<template>
  <div>
    <div>
      <slot />
    </div>
    <gmap-map
      :center="center"
      :zoom="14"
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
        <geo-info-box v-if="activeCompany.id" :company="activeCompany" />
      </gmap-info-window>
      <gmap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :icon="marker.icon"
        :clickable="true"
        :animation="2"
        @click="toggleInfoWindow(marker)"
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
  data () {
    return {
      activeCompany: { id: null },
      places: [],
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
      icons: {
        kiosk: {
          icon: '/food-kategory-icon.png'
        },
        bar: {
          icon: '/bar-kategory-icon.png'
        },
        shop: {
          icon: 'info-i_maps.png'
        },
        bookmarket: {
          icon: 'info-i_maps.png'
        }
      }
    }
  },
  computed: {
    companies () {
      return this.$store.state.companies
    },
    center () {
      return {
        lat: Number(this.$store.state.location.coords.latitude),
        lng: Number(this.$store.state.location.coords.longitude)
      }
    },
    markers () {
      const markerArray = []
      this.companies.forEach((el) => {
        markerArray.push({
          id: el.id,
          icon: this.icons[el.category] || 'bar-kategory-icon.png',
          position: { lat: Number(el.latitude), lng: Number(el.longitude) }
        })
      })
      return markerArray
    }
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
    toggleInfoWindow (marker) {
      this.infoWindow.infoWindowPosition = marker.position
      if (this.activeCompany.id === marker.id) {
        this.infoWindow.infoWindowOpenStatus = !this.infoWindow.infoWindowOpenStatus
      } else {
        this.infoWindow.infoWindowOpenStatus = true
        const newActive = this.companies.find(el => el.id === marker.id)
        this.activeCompany = newActive
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
