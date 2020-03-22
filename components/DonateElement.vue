<template>
  <v-flex xs12>
    <v-card color="teal" class="white--text my-7">
      <v-layout>
        <v-flex xs7 sm9 lg10 class="justify-center">
          <v-card-title primary-title>
            <v-flex xs12>
              <h1>
                {{ paymentHeadlines[paymentType] }}
              </h1>
              <v-btn
                v-if="paymentType !== 'bank'"
                rounded
                color="white"
                width="100%"
                max-width="400px"
                class="mt-9 px-12 py-7"
                link
                :href="paymentInfo[paymentType]"
                target="_blank"
              >
                <v-icon size="50" dark>
                  {{ mdiArrowRightThick }}
                </v-icon>
              </v-btn>
              <p v-if="paymentType === 'bank'" class="pt-7">
                Name: <nobr>Max Mustermann</nobr> <br>
                IBAN: <nobr>0011 1111 3333 3322</nobr>
              </p>
            </v-flex>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
import { mdiArrowRightThick } from '@mdi/js'

export default {
  props: {
    paymentInfo: {
      type: Object,
      default: () => {}
    },
    paymentType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mdiArrowRightThick,
      paymentHeadlines: {
        paypal: 'PayPal',
        gofoundme: 'GoFundMe',
        bank: 'Banküberweisung'
      }
    }
  },
  computed: {
    distanceWithUnit () {
      return this.distance > 999 ? `${this.distance / 1000}km` : `${this.distance}m`
    }
  }
}
</script>
