<script setup>
  // import Typing from './TypingText.vue'
  import Animation from '@/components/utils/Animation.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<template>
  <div class="landing">
    <Animation
      class="present"
    >
      <div :style="{marginTop: 'auto', marginBottom: 'auto'}">
        <h1 class="text-right">
          Carlos <br><span class="text-gray">Ramirez</span>
        </h1>
        <h3 class="text-right text-primary-gradient">
          {{ t('position') }}
        </h3>
      </div>
      <div
        class="icon"
        :style="{marginTop: 'auto', marginBottom: 'auto'}"
      >
        <lord-icon
          src="https://cdn.lordicon.com/anihkfxp.json"
          trigger="loop"
          colors="primary:#505454,secondary:#25a789 "

          stroke="80"
          style="width:180px;height:180px"
        />
      </div>
    </Animation>
  </div>
</template>

<style scoped>
  h1, h2, h3, h4, h5 {
    margin-top: 0;
    margin-bottom: 0;
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
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
  }

  h1{
    -webkit-text-stroke: thin;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 8rem;
    letter-spacing: -5px;
    line-height: .8;
    margin-bottom: 0;
    margin-right: 4px;
    text-transform: uppercase;
  }

  h3{
    margin-top: 0;
    font-family: 'Viga', sans-serif;
    font-size: 2.8rem;
    font-weight: normal;
    letter-spacing: -2px;
    line-height: 1;
    text-transform: uppercase;
  }

  @media (max-width: 720px) {
    *{
      text-align: center;
    }

    h1{
      font-size: 5em;
      margin-bottom: 1rem;
    }

    h3{
      max-width: fit-content;
    }
  }

  @media (min-width: 720px) and (max-width: 960px) {
    h1{
      font-size: 5em;
    }
    .icon{
      margin-left: .5em;
    }
    .present {
      display: inherit;
    }
  }

  @media (min-width: 720px) {
    .icon{
      margin-left: 2em;
    }
    .present {
      display: inherit;
    }
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
