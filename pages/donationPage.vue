<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm10
      md8
    >
      <h1>So kannst du spenden:</h1>
      <v-container class="mt-6">
        <Donate-Element v-for="(donate, index) in elements" :key="index" :donate-obj="donate" />
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import DonateElement from '~/components/DonateElement'

export default {
  components: {
    DonateElement
  },
  data () {
    return {
      elements: [
        {
          headline: 'Paypal',
          button: {
            link: 'https://www.paypal.me/johnnyzimmer/2.20',
            icon: ''
          }
        },
        {
          headline: 'GoFoundMe',
          button: {
            link: 'https://www.paypal.me/johnnyzimmer/2.20',
            icon: ''
          }
        },
        {
          headline: 'Iban',
          info: {
            name: 'Thomas Müller',
            iban: '9999 9999 999'
          }
        }
      ]
    }
  }
}
</script>
