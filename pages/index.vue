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
          v-for="(item, i) in items"
          :key="i"
        >
          <v-img height="300" :src="`https://picsum.photos/1200/400?random=${item.header}`" :alt="item.alt" />
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
          to="/splitscreen"
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
          alt: 'test',
          header: 'Jetzt ma’ Tacheles ',
          text: 'Jeder hat Sie, jeder kennt sie, jeder liebt sie – die kleinen Läden, die das Viertel besonders machen. Das Café um’s Eck, die Kneipe nebenan oder der Buchladen ne Straße weiter.'
        },
        {
          alt: 'test2',
          header: 'Ohne Moos, nix los ',
          text: 'Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein. Hier kommt ein Beispiel Text rein.'
        },
        {
          alt: 'test3',
          header: 'Nimm dir ’ne Minute',
          text: 'Unterstütze was dir lieb ist oder sag ganz offen, was dir am liebsten wäre. Shoutout ist für alle, für Nachbarn und Unternehmer, für Unterstützer und Arbeitgeber. Shoutout ist für dein Viertel.'
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
