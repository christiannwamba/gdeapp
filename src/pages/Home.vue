<template>
 <div>
   <div class="jumbotron">
    <div class="avatar-me">
      <img src="http://res.cloudinary.com/christekh/image/upload/v1499036414/me_j1us0d.jpg" alt="Avatar">
    </div>
    <h5>Christian Nwamba</h5>
    <h6>Codebeast</h6>
    <h5 class="preacher">JavaScript Preacher</h5>
    <p style="font-size: 16px">
    I’m a software engineer, 
    and web developer living in Lagos, Nigeria. 
    I am also a technical writer, 
    and a Javascript evangelist, 
    who is totally immersed in spreading the gospel of Javascript, 
    as well as building and strengthening communities, 
    one semi-colon at a time.
    Proud dad of a feisty six month old caucasian dog (named Java), traveller and  optimist!
    I'm a self proclaimed JavaScript Preacher.
    </p>


    <v-layout justify-space-around class="social">
    <div class="logo hidden-sm-and-down">
        <a href="https://scotch.io/@codebeast" target="_blank"><img src="https://res.cloudinary.com/christekh/image/upload/v1499262240/user_pspd96.svg" alt=""></a>
      </div>
      <div class="logo">
        <a href="https://github.com/christiannwamba" target="_blank"><img src="https://res.cloudinary.com/christekh/image/upload/v1499262240/github_e4hxtn.svg" alt=""></a>
      </div>
      <div class="logo">
        <a href="https://twitter.com/codebeast" target="_blank"><img src="https://res.cloudinary.com/christekh/image/upload/v1499262240/twitter_rjx8ni.svg" alt=""></a>
      </div>
      <div class="logo hidden-sm-and-down">
        <a href="https://plus.google.com/u/1/+ChristianNwamba" target="_blank"><img src="https://res.cloudinary.com/christekh/image/upload/v1499262240/google-plus_kvovo4.svg" alt=""></a>
      </div>
      <div class="logo">
        <a href="mailto:nwambachristian@gmail.com?Subject=Hi" ><img src="https://res.cloudinary.com/christekh/image/upload/v1499262240/email_jycrzn.svg" alt=""></a>
      </div>
    </v-layout>
    <v-layout justify-space-around>
      <v-icon large class="grey--text text--lighten-2">keyboard_arrow_down</v-icon>
    </v-layout>
  </div>
  <v-container fluid>
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
          <!--<v-btn to="#/jobs" tag block secondary light>More...</v-btn>-->
        </v-flex>
      </v-layout>
      <v-layout column class="even-column">
        <v-flex md8 offset-md2>
          <h4 class="mt-5">Reason for Applying</h4>
          <blockquote>
            &#8220;Strength lies in differences, not in similarities.&#8221;
            <footer>
              <small>
                <em>&mdash;Stephen R. Covey</em>
              </small>
            </footer>
          </blockquote>
          <v-layout column>
              <p>I had just finished speaking in one of the meet-ups I coordinate; Angular Nigeria, when one of the attendees walked up to me. “I always have depression because I feel my fellow Nigerians need to know the little I know, and I have no way of making this possible,” he said. I later got to understand his name is <a href="https://twitter.com/enoma_lawrence">Lawrence</a> and he is also passionate about developer community building.</p>

              <p>In Nigeria and Africa, we have a lot of ‘Lawrences’ who are not able to impact on the community just because they are limited in resources and logistics. We had to give him a slot to speak, in the next Laravel meet-up. While he spoke, I saw the fulfillment flash through his countenance as he impacted positively on the community. I was happy I saved someone from depression.</p>

              <p>Resources, logistics, tools, and knowledge, are major challenges to community building in Nigeria and Africa. These and many more, are the gaps that my being a GDE, bridges. I want to use the abilities of my GDE-ship, to inspire more ‘Lawrences’ out there, and in addition, mentor more people who want to grow to fit into any available niche of the community they might find passionate.</p>

              <p>Ever since that encounter, I have used all my available abilities, to ensure that people have an audience to teach and a podium to teach from. However, as the days go by, I find out that I need more knowledge and resources (Angular Nigeria grew from 50 to 200+ attendees) to improve on the little we have been able to do. I find out that while the community grows astronomically, our resources, knowledge-pool and logistics find it difficult to keep up pace.</p>

              <p>Becoming a Google Developer Expert, hopefully, will expose me to a lot of possibilities and mentorship programs, hence an exposure to help make impacts on all the ‘Lawrences’ in Nigeria and Africa. Honestly, the most important part of my job is what to tell people who call me mentors, and that is also the most difficult part of it. This is what I hope that Google will change about me, and about Lawrence.</p>

              <p>Together, we, owing to this chain reaction, hope to build the future of engineering. Even though I am a developer as you have seen from the foregoing, I am interested in building world class engineers who would be better than Lawrence and I; whose passion for technology would be second to none and whose availability and abilities would be inspiring. I can only speed up this process with your recognition and mentorship, hence my reason for applying.</p>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex md8 offset-md2>
          <h4 class="mt-5">Relationship with Google</h4>
          <blockquote>
            &#8220;They may forget what you said, but they will never forget how you made them feel.&#8221;
            <footer>
              <small>
                <em>&mdash;Carl W. Buechner</em>
              </small>
            </footer>
          </blockquote>
          <v-layout column>
              <p>Spoken at Google Developer Group event in Abuja, Nigeria and facilitated the just completed GDG Lagos IO17 event</p>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout column class="even-column">
        <v-flex md10 offset-md1>
          <h4 class="mt-5">Contents</h4>
          <blockquote>
            &#8220;Start writing, no matter what. The water doesn't flow until the faucet is turned on.&#8221;
            <footer>
              <small>
                <em>&mdash;Louis L’amour</em>
              </small>
            </footer>
          </blockquote>
          <v-layout row wrap v-for="i in Math.ceil(contents.length / 2)" :key="i" class="mt-5">
            <content-card
              v-for="content in contents.slice((i - 1) * 2, i * 2)"
              :content="content"
              :key="content.link"
            ></content-card>
          </v-layout>
          <v-btn to="#/contents" tag block secondary light>More...</v-btn>
        </v-flex>
      </v-layout>
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
          <!--<v-btn to="#/community" tag block secondary light>More...</v-btn>-->
        </v-flex>
      </v-layout>
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
          <!--<v-btn to="#/speaking" tag block secondary light>More...</v-btn>-->
        </v-flex>
      </v-layout>
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
          <v-btn to="https://github.com/christiannwamba" target="_blank" tag block secondary light>More...</v-btn>
        </v-flex>
      </v-layout>
  </v-container>
 </div>
</template>

<script>
  import JobCard from '../components/JobCard.vue'
  import ContentCard from '../components/ContentCard.vue'
  import CommCard from '../components/CommCard.vue'
  import SpeakCard from '../components/SpeakCard.vue'
  import OSCard from '../components/OSCard.vue'
  
  import data from '../data.json'
  

  export default {
    data() {
      return {
        jobs: data.jobs.slice(0,4),
        contents: data.contents.slice(0,4),
        comms: data.community.slice(0,4),
        speaches: data.speak.slice(0,4),
        oss: data.os.slice(0,4)
      }
    },
    created() {
      console.log(speaches)
    },
    components: {
      'job-card': JobCard,
      'content-card': ContentCard,
      'comm-card': CommCard,
      'speak-card': SpeakCard,
      'os-card': OSCard
    },
  }
</script>

<style lang="stylus">
.social {
  margin-top: 70px;
  div {
    border-radius: 5px;
    transition: background 150ms ease-in-out;
    a {
      display:block;
      padding: 30px;
    }
    &:hover {
      background: #f5f5f5;
    }
  }
}
.icon--large {
  font-size: 5rem;
  animation: colo 5s infinite;
}

@-webkit-keyframes colo {
    0%   {color: #eeeeee;}
    25%  {color: #e0e0e0;}
    75%  {color: #bdbdbd;}
    100% {color: #eeeeee;}
}
</style>
