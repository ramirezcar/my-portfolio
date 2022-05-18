<script setup>
  import '@/assets/base.scss'

  import NavBar from '@/components/ui/TheNavbar.vue'
  import Footer from '@/components/Footer.vue'

  import { ref, onMounted } from 'vue'

  const home = ref(null)
  const skills = ref(null)
  const experience = ref(null)
  const about = ref(null)

  const sections = ref([home, skills, experience, about])
  const activeNav = ref('home')

  onMounted(() => {
    window.history.scrollRestoration = 'manual'
  })
</script>

<template>
  <div class="bg" />
  <div class="gradient" />
  <div class="app">
    <NavBar />
    <RouterView />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
  .app{
    display: block;
    height: 100vh;
  }
  .gradient {
    background-image: url('@/assets/img/gradient-1.png');
    background-attachment: fixed;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
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
    background-position-y: 0;
    background-size: auto 120%;
    height: 100%;
    mix-blend-mode: darken;
    opacity: .5;
    position: fixed;
    width: 100%;
    z-index: -1;
  }
</style>
