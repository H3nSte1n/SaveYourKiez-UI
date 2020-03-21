<template>
  <div>
    <Map :locations="features" :company-infos="companyInfos" />
  </div>
</template>

<script>
import Map from '~/components/GoogleMap.vue'

export default {
  components: {
    Map
  },
  data () {
    return {
      features: [
        {
          position: { lat: -33.91721, lng: 151.22630 },
          type: 'kiosk'
        }, {
          position: { lat: -33.91539, lng: 151.22820 },
          type: 'kiosk'
        }
      ],
      companyInfos: [
        {
          name: 'Name',
          desc: 'asdjajksdnjk ankjdn ajksldklasjn djkasn jkdans kjdn kajsn dklasn dklnas kldna kslnd klasn kldnas klnd klasn dklnsa kldnska lnd klasn dklanskl dnklas ndkln skl',
          link: '/'
        },
        {
          name: 'Name 123123',
          desc: 'asdjajksdnjk ankjdn ajksldklasjn djkasn jkdans kjdn kajsn dklasn dklnas kldna kslnd klasn kldnas klnd klasn dklnsa kldnska lnd klasn dklanskl dnklas ndkln skl',
          link: '/'
        }
      ]
    }
  }
}
</script>
