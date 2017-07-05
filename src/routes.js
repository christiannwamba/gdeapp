import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Jobs from './pages/Jobs.vue'
import Community from './pages/Community.vue'
import Contents from './pages/Contents.vue'
import Speaking from './pages/Speaking.vue'
import OS from './pages/OS.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jobs', component: Jobs },
  { path: '/contents', component: Contents },
  { path: '/community', component: Community },
  { path: '/speaking', component: Speaking },
  { path: '/os', component: OS }
]

export default new VueRouter({routes})