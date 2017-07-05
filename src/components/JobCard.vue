<template>
  <v-flex md6 xs12 class="mt-2 pl-3 pr-3">
    <v-card hover raised @click="handleClick(job.description)">
      <v-card-column justify-center class="pa-5 grey lighten-1 job-card" :style="composeBackgroundStyle(job.media)">
        <div class="display-1 white--text">{{job.company}}</div> 
        <p class="display-5 white--text">{{job.title}}</p> 
        <p class="display-5 grey--text">{{job.duration}} ({{job.type}})</p> 
      </v-card-column>
    </v-card>
  </v-flex>
</template>

<script>
  import {composeBackgroundStyle, bus} from '../utils'
  export default {
    props: ['job'],
    data() {
      return {
        composeBackgroundStyle
      }
    },
    methods: {
      handleClick(description) {
        bus.$emit('modal', this.job)
      }
    }
  }
</script>

<style lang="stylus">
.job-card {
  border-radius: 5px;
  height: 300px;
  justify-content: center;
  background-size: cover
  background-image: linear-gradient(
rgba(0, 0, 0, 0.8),
rgba(0, 0, 0, 0.7)
), url('/public/bg/scotch-job.png')
}
</style>