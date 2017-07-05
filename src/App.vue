<template>
  <v-app>
    <v-navigation-drawer
      temporary v-model="drawer" :mini-variant="false" dark
    >
      <v-list class="pa-0">
        <v-list-item>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="http://res.cloudinary.com/christekh/image/upload/v1499036414/me_j1us0d.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Christian Nwamba</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon light @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-item v-for="item in items" :key="item" tag="a" href="/jobs">
          <v-list-tile :to="item.link">
            <v-list-tile-action>
              <v-icon light>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed light>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title @click="go('/')">GDE Activites Profile</v-toolbar-title>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
    <vodal :show="modal.show" animation="zoom" @hide="modal.show = false" :width="1000" :height="600" className="modal">
        <h4 class="mb-1">{{modal.title}}</h4>
        <h6 class="mb-1">{{modal.company}}</h6>
        <p class="gray--text"><strong>{{modal.duration}}</strong></p>
        <div v-html="modal.content"></div>
    </vodal>
  </v-app>
</template>

<script>
  import JobCard from './components/JobCard.vue'
  import { bus } from './utils'
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        modal: {
          show: false,
          title: '',
          sub: '',
          content: ''
        },
        items: [
          { icon: 'home', title: 'Home', link: '/' },
          { icon: 'work', title: 'Jobs', link: '#/jobs' },
          { icon: 'list', title: 'Contents', link: '#/contents' },
          { icon: 'directions_run', title: 'Community', link: '#/community' },
          { icon: 'keyboard_voice', title: 'Speaking', link: '#/speaking' },
          { icon: 'group_work', title: 'OS', link: '#/os' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
      bus.$on('modal', (value) => {
        console.log(this.modal)
        this.modal.show = true;
        this.modal.content = value.description
        this.modal.title = value.title
        this.modal.company = value.company
        this.modal.duration = value.duration
      })
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(e) {
        const scrollTop = document.querySelector('body').scrollTop;
        const toolbar = document.querySelector('.toolbar')
        if(scrollTop >= 650) {
          toolbar.style.background = '#212121';
          toolbar.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)'
        } else {
          if(this.$router.currentRoute.path === '/') {
            toolbar.style.background = 'transparent';
            toolbar.style.boxShadow = 'none'
          }
        }
      },
      go() {
        this.$router.push('/')
      }
    },
    components: {'job-card': JobCard}
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  .toolbar {
    background: transparent;
    box-shadow: none;
  }
  .avatar-me {
    padding-top: 100px;
    margin-bottom: 15px;
    img {
      width: 100px;
      height: auto;
      border: 4px solid #37474f;
      display: block;
      margin: 0 auto;
      border-radius: 100%;
    }
  }
  .jumbotron {
    h5,h6,p {
      text-align: center;
      color: #e0e0e0;
    }
    h5 {
      margin-bottom: 0;
      margin-top: 25px;
    }
    p {
      max-width: 500px;
      margin: 25px auto
    }
    .preacher {
      text-transform: uppercase;
      margin: 50px auto;
    }
  }
  .logo {
    img {
      width: 50px;
    }
  }
  blockquote {
    margin-bottom: 20px;
  }
  .job-card {
    height: 300px;
    justify-content: center;
    background-size: cover
    background-image: linear-gradient(
  rgba(0, 0, 0, 0.8),
  rgba(0, 0, 0, 0.7)
  ), url('/public/bg/scotch-job.png')
  }
  .even-column {
      margin-top: 20px;
      background: #f5f5f5;
      padding-bottom: 20px;
  }
  .container {
    padding: 0
  }
  blockquote {
    border-left: 5px solid #424242;
  }
  .toolbar__title {
    cursor:pointer;
  }
  .footer {
    background: #424242;
    margin-top: 50px;
  }
  .modal .vodal-dialog {
    padding: 20px 50px;
    background: #f5f5f5;
    border-left: 30px solid #616161;
  }
  .vodal-mask {
    background: rgba(0,0,0,0.8);
  }
  .container {
    padding: 0 2em;
  }
  .jumbotron
    width: 100%
    height: 850px
    margin-top: -70px
    background-size: cover
    background-image: linear-gradient(
  rgba(0, 0, 0, 0.9),
  rgba(0, 0, 0, 0.8)
  ), url('http://res.cloudinary.com/christekh/image/upload/v1499035338/pexels-photo-78855_kpjihn.jpg')
  
</style>
