<script setup>
  import Typing from './TypingText.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n();
</script>


<template>
  <div class="landing-container">
    <div class="landing">
      <h1 class="text-right">Carlos <br /><span class="text-gray">Ramirez</span></h1>
      <h3 class="text-right text-primary-gradient">{{ t('position') }}</h3>
    </div>
    <div class="typing-container">
      <!-- <Typing class="text-light-gray">Programing is freedom!</Typing> -->
    </div>
  </div>
</template>

<style scoped>
  h1, h2, h3, h4, h5 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .landing-container{
    height: 100vh;
    display: flex;
  }


  .typing-container{
    margin-left: 2em;
    display: flex;
    align-items: center;
  }
  .landing{
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-right: 2em;
    width: 60%;
  }

  .landing h1{
    -webkit-text-stroke: thin;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    font-size: 7rem;
    letter-spacing: -5px;
    line-height: .8;
    margin-bottom: 0;
    margin-right: 4px;
    text-transform: uppercase;
  }

  .landing h3{
    margin-top: 0;
    font-family: 'Viga', sans-serif;
    font-size: 2.8rem;
    font-weight: normal;
    letter-spacing: -2px;
    text-transform: uppercase;
    /* width: auto; */
  }
</style>

<i18n>
{
  "en": {
    "position": "Frontend Developer",
  },
  "es": {
    "position": "Desarrollador Frontend",
  }
}
</i18n>
