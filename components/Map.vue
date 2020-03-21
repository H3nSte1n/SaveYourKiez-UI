<template>
  <div>
    <googlemaps-map
      :center.sync="center"
      :zoom.sync="zoom"
      :options="mapOptions"
      @idle="onIdle"
      @click="onMapClick"
    >
      <!-- User Position -->
      <googlemaps-user-position
        @update:position="setUserPosition"
      />
    </googlemaps-map>
  </div>
</template>

<script>

export default {

}
</script>
