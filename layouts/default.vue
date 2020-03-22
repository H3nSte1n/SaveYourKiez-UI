<template>
  <v-app light>
    <v-layout justify-center class="ly-header">
      <v-flex
        xs12
        sm12
        md8
        class="mx-5 mt-3 mb-3"
      >
        <img src="~/assets/logo.png" alt="Shoutout!" class="ly-logo">
      </v-flex>
    </v-layout>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Split Screen',
          to: '/splitScreen'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Map Test',
          to: '/mapTest'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>
.ly-header {
  max-height: 80px;
}
.ly-logo {
  width: 120px;
}
</style>
