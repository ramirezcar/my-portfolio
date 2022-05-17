<script setup>
import SocialNetworks from '@/components/SocialNetworks.vue'
import Landing from '@/components/Landing.vue'
import { defineProps } from 'vue';
import Animation from '@/components/utils/Animation.vue';

const props = defineProps(['id']);
</script>

<template>
  <!-- <div class="bg-2" /> -->
  <section class="row h-full" :id="props.id">
    <div class="bg-text-1 no-select">Web Dev<br/>elo<br/>per</div>
    <div class="bg-text-2 no-select">Front<br/>end<br/> Dev</div>
    <Animation aos-animation="fade-right" duration="2000" delay="150">
      <SocialNetworks />
    </Animation>
    
    <div class="landing-container">
      <Landing />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .landing-container{
    height: 100vh;
    left: 50%;
    display: flex;
    justify-content: center;
  }

  .bg-2{
    background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf8e2082724583.5d262807987f9.jpg');
    width: 100%;
    height: 100%;
    position: absolute;
    mix-blend-mode: color;
    opacity: .5;
  }

  
.bg-text-1{
  position: absolute;
  width: 26rem;
  left: 72px;
  top: 105px;
  font-family: 'Secular One';
  font-style: normal;
  font-weight: 400;
  font-size: 11rem;
  line-height: 83.5%;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.042) 0%, rgba(0, 0, 0, 0) 100%), rgba(0, 0, 0, 0.034);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.bg-text-2{
  position: absolute;
  right: 3vw;
  bottom: 51px;
  font-family: 'Secular One';
  font-style: normal;
  font-weight: 400;
  font-size: 10rem;
  line-height: 83.5%;
  text-align: right;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0242) 0%, rgba(17, 0, 120, 0.0462) 100%), rgba(0, 0, 0, 0.03);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

</style>