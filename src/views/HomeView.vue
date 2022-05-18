<script setup>
  import SocialNetworks from '@/components/home/SocialNetworks.vue'
  import Landing from '@/components/home/Landing.vue'

  const props = defineProps({
    id: {
      type: String,
      default: '0'
    }
  })
</script>

<template>
  <section
    :id="props.id" 
    class="row h-full"
  >
    <div class="bg-text -left no-select">
      Web Dev<br>elo<br>per
    </div>
    <div class="bg-text -right no-select">
      Front<br>end<br> Dev
    </div>
    <SocialNetworks />
    
    <div class="landing-container">
      <Landing />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .landing-container{
    // height: 100%;
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

  .bg-text{
    position: absolute;
    font-family: 'Secular One';
    font-size: 10rem;
    font-style: normal;
    font-weight: 400;    
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.056);
    background-clip: text;
    // text-fill-color: transparent;
    line-height: 83.5%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    @media screen and (max-width: 640px) {
      font-size: 6rem;
    }
    &.-left{
      // background: linear-gradient(180deg, rgba(14, 14, 14, 0.042) 0%, rgba(0, 0, 0, 0) 100%), rgba(0, 0, 0, 0.034);
      width: 2vw;
      left: 5vw;
      max-width: 20vw;
      top: 10vh;
    }
    &.-right{
      // background: linear-gradient(180deg, rgba(0, 0, 0, 0.0242) 0%, rgba(17, 0, 120, 0.0462) 100%), rgba(0, 0, 0, 0.03);
      bottom: 5vh;
      right: 5vw;
      text-align: right;
      
    }
  }

  section{
    height: 100%;
  }
</style>