<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/layouts/NavBar.vue'
import Home from '@/views/Home.vue'
import '@/assets/base.scss'
import About from './views/About.vue';
import Skills from './views/Skills.vue';
import Animation from './components/utils/Animation.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- <div class="bg-1"> -->

    <NavBar />
    <Animation aos-animation="fade-right" duration="1500">
      <Home id="home"/>
    </Animation>
    <Skills id="skills" v-bind:style="{marginTop: '8rem'}"/>
    <About id="about"/>
    <Footer />
  <!-- </div> -->
</template>

<style lang="scss">
  .bg-1{
    // background: radial-gradient(59.48% 117.62% at 83.3% 50%, rgba(33, 176, 142, 0.126) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, 
    //   linear-gradient(45.26deg, rgba(166, 166, 166, 0.2) 20.04%, rgba(91, 91, 91, 0) 119.52%), #040404;  min-height: 100vh;
    min-width: 100%;
    /* margin-top: -1vh; */
    position: absolute;
    background-repeat: no-repeat;
    z-index: -2;
    &::before{
      // background: url('@/assets/img/bg-1.png');
      background-position-x: center;
      background-position-y: center;
      background-size: cover;
      content: '';
      left: 0px;
      min-width: 100vw;
      min-height: 100vh;
      mix-blend-mode: darken;
      position: absolute;
      top: 0px;
      z-index: -5;
    }
  }
</style>
