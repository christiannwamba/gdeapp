<template>
  <v-layout column>
    <v-flex md10 offset-md1>
      <h4 class="mt-5">Community Building</h4>
      <blockquote>
        &#8220;Educate a boy, and you educate an individual. Educate a girl, and you educate a community.&#8221;
        <footer>
          <small>
            <em>&mdash;Adelaide Hoodless</em>
          </small>
        </footer>
      </blockquote>
      <v-layout row wrap v-for="i in Math.ceil(comms.length / 2)" :key="i" class="mt-5">
        <comm-card
          v-for="comm in comms.slice((i - 1) * 2, i * 2)"
          :comm="comm"
          :key="comm.link"
        >
        </comm-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import CommCard from '../components/CommCard.vue'
import data from '../data.json'
export default {
  data() {
    return {
      comms: data.community,
    }
  },
  mounted() {
    if(this.$router.currentRoute.path !== '/') {
      const toolbar = document.querySelector('.toolbar')
      toolbar.style.background = '#212121';
      toolbar.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)'
    }
  },
  components: {'comm-card': CommCard}
}
</script>
