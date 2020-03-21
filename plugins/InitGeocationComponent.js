import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA7t2TU7SjGRFr6lkdONM3zJQZPBbYMS1s',
    libraries: ['places']
  }
})
