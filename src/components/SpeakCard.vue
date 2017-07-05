<template>
  <v-flex md6 xs12 class="mt-2 pl-3 pr-3">
    <v-card hover raised @click="go(speak.link)">
      <v-card-column justify-center class="pa-5 grey lighten-1 job-card" :style="composeBackgroundStyle(speak.media)">
        <div class="display-1 white--text">{{speak.event}}</div> 
        <p class="display-5 white--text">RSVP: {{speak.RSVP}}</p> 
      </v-card-column>
    </v-card>
  </v-flex>
</template>

<script>
  import {composeBackgroundStyle} from '../utils'
  export default {
    props: ['speak'],
    data() {
      return {
        composeBackgroundStyle
      }
    },
    methods: {
      go(url) {
        window.open(url,'_blank');
      }
    }
  }
</script>

<style lang="stylus">
</style>