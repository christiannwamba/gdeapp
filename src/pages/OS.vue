<template>
  <v-layout column class="">
    <v-flex md10 offset-md1>
      <h4 class="mt-5">Open Source Contributions</h4>
      <blockquote>
        &#8220;The only thing you absolutely need to know is the location of the library.&#8221;
        <footer>
          <small>
            <em>&mdash;Albert Einstein</em>
          </small>
        </footer>
      </blockquote>
      <v-layout row wrap v-for="i in Math.ceil(oss.length / 2)" :key="i" class="mt-3">
        <os-card
          v-for="os in oss.slice((i - 1) * 2, i * 2)"
          :os="os"
          :key="os.link"
        >
        </os-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import OSCard from '../components/OSCard.vue'
import data from '../data.json'
export default {
  data() {
      return {
        oss: data.os,
      }
    },
    mounted() {
      if(this.$router.currentRoute.path !== '/') {
        const toolbar = document.querySelector('.toolbar')
        toolbar.style.background = '#212121';
        toolbar.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)'
      }
    },
    components: {'os-card': OSCard}
}
</script>
