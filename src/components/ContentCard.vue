<template>
  <v-flex md6 xs12 class="mt-2 pl-3 pr-3">
    <v-card hover raised @click="go(content.link)">
      <v-card-column justify-center class="pa-5 grey lighten-1 job-card" :style="composeBackgroundStyle(content.media, 0.9)">
        <div class="display-1 white--text">{{content.title}}</div> 
        <p class="display-5 white--text">{{content.platform}}</p> 
        <p class="display-5 grey--text">{{content.date}}</p> 
      </v-card-column>
    </v-card>
  </v-flex>
</template>

<script>
  import {composeBackgroundStyle} from '../utils'
  export default {
    props: ['content'],
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