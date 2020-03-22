<template>
  <v-layout
    justify-center
    align-center
    class="donation"
  >
    <v-icon color="#000" width="60" large class="donation-icon" @click="$emit('close')">
      {{ mdiClose }}
    </v-icon>
    <v-flex
      xs12
      sm10
      md8
    >
      <h1>So kannst du spenden:</h1>
      <v-container class="mt-6">
        <Donate-Element :payment-info="payments" payment-type="paypal" />
        <Donate-Element :payment-info="payments" payment-type="gofoundme" />
        <Donate-Element :payment-info="payments" payment-type="bank" />
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiClose } from '@mdi/js'
import DonateElement from '~/components/DonateElement'

export default {
  components: {
    DonateElement
  },
  props: {
    payments: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      mdiClose
    }
  }
}
</script>

<style>
.donation {
  position: relative;
}

.donation-icon {
  position: absolute !important;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
