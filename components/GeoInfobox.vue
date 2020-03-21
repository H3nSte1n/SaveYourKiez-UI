<template>
  <div>
    <h2>{{ companyInfos[currentIndex].name }}</h2>
    <p>{{ cutDesc }}</p>
    <v-btn nuxt :to="companyInfos[currentIndex].link">
      zum Profil
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    companyInfos: {
      type: Array,
      required: false
    },
    currentIndex: {
      type: Number,
      required: false
    }
  },
  computed: {
    cutDesc () {
      return `${this.companyInfos[this.currentIndex].desc.substring(1, 200)}...`
    }
  }
}
</script>
