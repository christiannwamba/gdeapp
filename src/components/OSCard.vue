<template>
<v-flex md6 xs12 class="mt-2 pl-3 pr-3">
  <v-card horizontal xs12>
    <v-card-row class="github-bg" img="/public/logos/github.svg" height="130px"></v-card-row>
    <v-card-column>
      <v-card-row height="75px" class="grey darken-3 white--text">
        <v-card-text>
          <strong>{{os.name}}</strong>
          <div><v-icon left light>star</v-icon> {{os.stars}}</div>
        </v-card-text>
      </v-card-row>
      <v-card-row actions class="grey darken-3 darken-2">
        <v-btn flat class="white--text" tag :href="os.contrib">
          <v-icon left light>directions</v-icon>Contributions
        </v-btn>
      </v-card-row>
    </v-card-column>
  </v-card>
  </v-flex>
</template>

<script>
  import {composeBackgroundStyle} from '../utils'
  export default {
    props: ['os'],
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="stylus">
  .github-bg {
    background-size: center !important
    background-image: linear-gradient(
  rgba(0, 0, 0, 0.9),
  rgba(0, 0, 0, 0.8)
  ), url('/public/logos/github.svg') !important
  }
</style>