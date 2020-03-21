<template>
  <div class="splitPage">
    <v-card
      class="d-flex align-start flex-column justify-space-between"
      color="grey lighten-2"
      flat
      tile
      height="50vh"
    >
      <h2 class="text-center font-weight-bold mt-8 ml-auto mr-auto">
        Du willst helfen
      </h2>
      <v-btn
        exact
        outlined
        nuxt
        right
        bottom
        to="/"
        class="ml-auto mr-5 mb-5 pa-6 px-9"
      >
        Weiter
      </v-btn>
    </v-card>
    <v-divider
      dark
      inset
    />
    <v-card
      class="d-flex align-start flex-column justify-space-between"
      color="grey lighten-2"
      flat
      tile
      height="50vh"
    >
      <h2 class="text-center font-weight-bold mt-8 ml-auto mr-auto">
        Du brauchst hilfe
      </h2>
      <v-btn
        exact
        outlined
        nuxt
        to="/"
        class="ml-auto mr-5 mb-5 pa-6 px-9"
      >
        Weiter
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.splitPage {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    border: solid 1px black;
  }
}
</style>
