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
      <v-icon>{{ mdiCheck }}</v-icon>
      <p>
        Danke!<br>
        Deine Spende ist angekommen.
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiCheck } from '@mdi/js'

export default {
  data () {
    return {
      mdiCheck
    }
  }
}
</script>
