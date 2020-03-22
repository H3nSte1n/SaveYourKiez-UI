<template>
  <v-container class="container pa-0" fill-height>
    <v-layout
      flex-column
    >
      <v-carousel
        show-arrows
        hide-delimiter-background
        hide-delimiters
        dark
        height="none"
        progress
        progress-color="#1E88E5"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
          <v-img height="300" :src="`${item.logo}`" :alt="item.alt" />
          <div class="pb-12">
            <h2 class="ma-4">{{ item.header }}</h2>
            <blockquote class="text-left ma-4">
              {{ item.text }}
            </blockquote>
          </div>
        </v-carousel-item>
      </v-carousel>
      <div max-width="700" class="mx-auto button">
        <v-btn
          exact
          nuxt
          depressed
          outlined
          color="indigo"
          large
          to="/SplitScreen"
        >
          Los geht's
        </v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      items: [
        {
          logo: 'test.jpg',
          alt: 'test',
          header: 'First Header',
          text: 'Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein.'
        },
        {
          logo: 'test2.jpg',
          alt: 'test2',
          header: 'Second Header',
          text: 'Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein.'
        },
        {
          logo: 'test3.jpg',
          alt: 'test3',
          header: 'Third Header',
          text: 'Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein.'
        }
      ]
    }
  },
  mounted () {
    this.fetchCompanies()
  },
  methods: {
    async fetchCompanies () {
      try {
        const companies = await fetch('https://savethekiez.herokuapp.com/api/v1/companies.json')
        const parsedCompanies = await companies.json()
        this.$store.dispatch('setCompanies', parsedCompanies)
      } catch {}
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  max-width: 900px;
}

.button {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.test {
  color: #1E88E5;
}
</style>
