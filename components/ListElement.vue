<template>
  <v-flex xs12>
    <v-card color="teal lighten-2" class="white--text">
      <v-layout>
        <v-flex xs4 sm3 md2>
          <v-img
            :src="image"
            contain
          />
        </v-flex>
        <v-flex xs8 sm9 md10>
          <v-card-title primary-title>
            <v-flex xs12>
              <div class="text-right body-1 font-weight-bold">
                {{ distance }}
              </div>
              <div class="text-left body-2">
                {{ category }}
              </div>
              <div class="headline text-left">
                {{ headline }}
              </div>
              <div class="text-left pt-2 ">
                <v-btn small flat light>
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
      default: 'Bonner Frittebud'
    },
    category: {
      type: String,
      default: 'Restaurant'
    },
    distance: {
      type: String,
      default: '200m'
    }
  }
}
</script>
