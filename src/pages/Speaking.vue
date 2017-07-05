<template>
  <v-layout column class="even-column">
        <v-flex md10 offset-md1>
          <h4 class="mt-5">Speaking</h4>
          <blockquote>
            &#8220;The most precious things in speech are the pauses.&#8221;
            <footer>
              <small>
                <em>&mdash;Sir Ralph Richardson</em>
              </small>
            </footer>
          </blockquote>
          <v-layout row wrap v-for="i in Math.ceil(speaches.length / 2)" :key="i" class="mt-5">
            <speak-card
              v-for="speach in speaches.slice((i - 1) * 2, i * 2)"
              :speak="speach"
              :key="speach.media"
            >
            </speak-card>
          </v-layout>
          
        </v-flex>
      </v-layout>
</template>

<script>
import SpeakCard from '../components/SpeakCard.vue'
import data from '../data.json'
export default {
  data() {
    return {
      speaches: data.speak,
    }
  },
  mounted() {
    if(this.$router.currentRoute.path !== '/') {
      const toolbar = document.querySelector('.toolbar')
      toolbar.style.background = '#212121';
      toolbar.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)'
    }
  },
  components: {'speak-card': SpeakCard}
}
</script>
