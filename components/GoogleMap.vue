<template>
  <div>
    <div>
      <slot />
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
      <v-btn @click="updatePosition">
        Add
      </v-btn>
      <br>
    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
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
        {{ "Hello World" }}
      </gmap-info-window>
      <gmap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :icon="marker.icon"
        :clickable="true"
        @click="toggleInfoWindow(marker,index)"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: {
    locations: {
      type: Array,
      default: () => [] // array with objects
    },
    companyInfos: {
      type: Array,
      default: () => []
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
      icons: {
        kiosk: {
          icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
        },
        bar: {
          icon: 'library_maps.png'
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
    // this.geolocate()
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
      this.center = {
        lat: this.location.coords.latitude,
        lng: this.location.coords.longitude
      }
    },
    toggleInfoWindow (marker, i) {
      console.log('test')
      this.infoWindow.infoWindowPosition = marker.position
      let index = null

      if (index === i) {
        this.infoWindow.infoWindowOpenStatus = !this.infoWindow.infoWindowOpenStatus
      } else {
        this.infoWindow.infoWindowOpenStatus = true
        index = i
      }
    }
  }
}
</script>
