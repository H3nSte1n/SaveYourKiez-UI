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
        {{ company.headline }}
      </div>
    </v-flex>
  </v-layout>
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
