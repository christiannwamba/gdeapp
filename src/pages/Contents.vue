<template>
  <v-layout column class="even-column">
    <v-flex md10 offset-md1>
      <h4 class="mt-5">Contents ({{contents.length}})</h4>
      <blockquote>
        &#8220;Start writing, no matter what. The water doesn't flow until the faucet is turned on.&#8221;
        <footer>
          <small>
            <em>&mdash;Louis L’amour</em>
          </small>
        </footer>
      </blockquote>
      <div class="text-xs-center">
        <v-btn @click.native="filter('ALL')">All</v-btn>
        <v-btn 
          @click.native="filter(platform)"
          secondary 
          class="grey--text text--lighten-2" 
          v-for="platform in platforms" 
          :key="platform"
          >
          <span>{{platform}}</span>
        </v-btn>
      </div>
      <v-layout row wrap v-for="i in Math.ceil(contents.length / 2)" :key="i" class="mt-5">
        <content-card
          v-for="content in contents.slice((i - 1) * 2, i * 2)"
          :content="content"
          :key="content.link"
        ></content-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'
import data from '../data.json'
export default {
  data() {
    return {
      contents: data.contents,
      platforms: ['CLOUDINARY', 'SCOTCH', 'MEDIUM', 'PUSHER', 'CODEMENTOR']
    }
  },
  methods: {
    filter(platform) {
      console.log(platform)
      switch(platform) {
        case 'ALL':
          this.contents = data.contents;
          break;
        case platform:
          // const platform = this.platforms[platform];
          this.contents = data.contents.filter(content => content.platform.toUpperCase() === platform)
          break;
      }
    }
  },
  mounted() {
    if(this.$router.currentRoute.path !== '/') {
      const toolbar = document.querySelector('.toolbar')
      toolbar.style.background = '#212121';
      toolbar.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)'
    }
  },
  components: {'content-card': ContentCard}
}
</script>
