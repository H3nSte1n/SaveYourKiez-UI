<template>
  <v-flex xs12>
    <v-card color="teal" class="white--text my-7">
      <v-layout>
        <v-flex xs7 sm9 lg10 class="justify-center">
          <v-card-title primary-title>
            <v-flex xs12>
              <h1>
                {{ donateObj.headline }}
              </h1>
              <v-btn
                v-if="donateObj.button"
                rounded
                color="white"
                width="100%"
                max-width="400px"
                class="mt-9 px-12 py-7"
                link
                :href="donateObj.button.link"
              >
                <v-icon size="50" dark>
                  {{ mdiArrowRightThick }}
                </v-icon>
              </v-btn>
              <p v-if="donateObj.info" class="pt-7">
                Name: <nobr>{{ donateObj.info.name }}</nobr> <br>
                IBAN: <nobr>{{ donateObj.info.iban }}</nobr>
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
    donateObj: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      mdiArrowRightThick
    }
  },
  computed: {
    distanceWithUnit () {
      return this.distance > 999 ? `${this.distance / 1000}km` : `${this.distance}m`
    }
  }
}
</script>
