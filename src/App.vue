<template>
  <div class="bg"></div>
  <div class="gradient"></div>
  <NavBar v-bind:active-nav="activeNav" v-bind:sections="sections">
    <router-view></router-view>
    <!-- <div id="home" ref="home">
      <Animation aos-animation="fade-right" duration="1500" data-aos-once="true">
        <Home id="home"/>
      </Animation>
    </div>
    <div id="skills" ref="skills">
      <Skills 
        id="skills" 
        v-bind:style="{marginTop: '0rem'}"
      />
    </div>
    <div id="experience" ref="experience">
      <Experience 
        id="experience" 
        v-bind:style="{marginTop: '0rem'}"
      />
    </div>
    <div id="about" ref="about">
      <About id="about"/>
    </div> -->
    <Footer />
  </NavBar>
</template>

<script setup>
  import '@/assets/base.scss'

  import NavBar from '@/components/layouts/NavBar.vue'
  import Home from '@/views/Home.vue'
  import About from './views/About.vue';
  import Skills from './views/Skills.vue';
  import Experience from './views/Experience.vue';
  import Animation from './components/utils/Animation.vue';
  import Footer from './components/Footer.vue';

  import { ref, onMounted } from 'vue'

  const home = ref(null)
  const skills = ref(null)
  const experience = ref(null)
  const about = ref(null)

  const sections = ref([home, skills, experience, about]);
  const activeNav = ref('home');

  onMounted(() => {
    window.history.scrollRestoration = 'manual'
    // window.addEventListener("scroll", () => {
    //   let current = '';
    //   sections.value.forEach(section => {
    //     const target = section.value;
    //     const sectionTop = target.offsetTop;
    //     const sectionHeight = target.offsetHeight;
    //     if (scrollY >= sectionTop - sectionHeight / 3) {
    //       current = target.getAttribute('id');
    //       activeNav.value = current;
    //     }
    //   });
    // })
  });
</script>

<style lang="scss">
  .gradient {
    background-image: url('@/assets/img/gradient-1.png');
    background-attachment: fixed;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    // opacity: .9;
    min-height: 100%;
    mix-blend-mode: revert;
    position: fixed;
    width: 100%;
    z-index: -2;
  }
  .bg{
    background-attachment: fixed;
    background-image: url('@/assets/img/bg-1.png');
    background-position-x: center;
    background-position-y: -500px;
    background-size: cover;
    height: 100%;
    mix-blend-mode: darken;
    opacity: .5;
    position: fixed;
    width: 100%;
    z-index: -1;
  }
</style>
