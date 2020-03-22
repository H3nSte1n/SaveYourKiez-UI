<template>
  <v-flex xs12>
    <v-card class="white--text mb-5">
      <v-layout>
        <v-avatar
          class="profile"
          color="grey"
        >
          <v-img
            :src="image"
            contain
            class="mr-4"
          />
        </v-avatar>
        <v-flex xs7 sm9 lg10 class="justify-center">
          <v-card-title primary-title>
            <v-flex xs12>
              <div class="text-right body-2 font-weight-bold">
                {{ distanceWithUnit }}
              </div>
              <div class="text-left body-2">
                {{ category }}
              </div>
              <div class="headline text-left">
                {{ headline }}
              </div>
              <div class="text-left pt-2 ">
                <v-btn nuxt text :to="link" small dark>
                  Jetzt supporten
                </v-btn>
              </div>
            </v-flex>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'https://i.picsum.photos/id/299/200/200.jpg'
    },
    headline: {
      type: String,
      default: 'Frittebud'
    },
    category: {
      type: String,
      default: 'Restaurant'
    },
    distance: {
      type: Number,
      default: 0
    },
    link: {
      type: String,
      default: '/'
    }
  },
  computed: {
    distanceWithUnit () {
      return this.distance > 999 ? `${this.distance / 1000}km` : `${this.distance}m`
    }
  }
}
</script>
