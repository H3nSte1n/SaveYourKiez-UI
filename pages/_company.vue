<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-img src="https://i.picsum.photos/id/299/1300/300.jpg" />
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col
        cols="12"
        sm="8"
        md="5"
        offset-sm="2"
        offset-md="3"
      >
        <h1 class="headline mb-10">
          {{ company.headline }}
        </h1>

        <p class="block-1">
          {{ company.description }}
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="2"
        offset-md="1"
        md="3"
      >
        <v-btn primary class="pl-10 pr-10">
          Spenden
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  validate ({ params, store }) {
    const { companies } = store.state
    return companies.find(el => el.key === params.company)
  },
  components: {
  },
  computed: {
    company () {
      return this.$store.state.companies.find(el => el.key === this.$route.params.company)
    }
  }
}
</script>
