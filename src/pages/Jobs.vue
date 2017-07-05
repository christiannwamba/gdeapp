<template>
  <v-layout column>
        <v-flex md10 offset-md1>
          <h4 class="mt-5">Jobs Taken</h4>
          <blockquote>
            &#8220;If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.&#8221;
            <footer>
              <small>
                <em>&mdash;Sheryl Sandberg</em>
              </small>
            </footer>
          </blockquote>
          <v-layout row wrap v-for="i in Math.ceil(jobs.length / 2)" :key="i" class="mt-5">
            <job-card
              v-for="job in jobs.slice((i - 1) * 2, i * 2)"
              :job="job"
              :key="job.compay"
            ></job-card>
          </v-layout>
        </v-flex>
      </v-layout>
</template>

<script>
  import JobCard from '../components/JobCard.vue'
  import data from '../data.json'
  export default {
    data() {
      return {
        jobs: data.jobs,
      }
    },
    mounted() {
      if(this.$router.currentRoute.path !== '/') {
        const toolbar = document.querySelector('.toolbar')
        toolbar.style.background = '#212121';
        toolbar.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)'
      }
    },
    components: {'job-card': JobCard}
  }
</script>