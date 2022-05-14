<template>
  <div class="container content">
    <Animation aos-animation="fade-left" duration="2000" delay="150">
      <div class="flex-between bordered">
        <h1 class="text-primary-gradient pulse-bg">{{ t('experience') }}</h1>
        <p class="">{{ t('description') }}</p>
        <div class="grid">
          <div class="item focus-anim" v-for="(experience, index) in experiences[locale]">
            <h2 class="text-primary">{{ experience.title }}</h2>
            <div>
              <small class="company">{{ experience.company }}</small> · 
              <small class="period text-light-gray">{{ experience.period }}</small>
            </div>
            <p>{{ experience.description }}</p>
          </div>
          <div class="item soon focus-anim text-light-gray">
            <p>{{ t('discover') }}</p>
          </div>
        </div>
      </div>
    </Animation>
  </div>
</template>

<script setup>
  import experiences from "@/resources/experience";
  import { useI18n } from 'vue-i18n'
  import { onMounted } from "vue";
  import AOS from "aos";
  import Animation from "../components/utils/Animation.vue";

  const { locale } = useI18n()
  const { t } = useI18n();

  onMounted(() => {
      AOS.init();
  })
</script>

<style lang="scss" scoped>
  .pulse-bg {
    animation: pulse 3s infinite;
    animation-direction:alternate;
  }

  @keyframes pulse {
    0% {
      color: var(--color-primary);
    }
    100% {
      color: var(--color-secondary);
    }
  }

  .soon{
    display: flex;
    align-items: center;
  }

  .grid{
    display: grid;
    grid-auto-rows: 240px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap:    12px;
    grid-column-gap: 1rem;
    margin-top: 1.5rem;
    width: 100%;
  }

  .item{
    background: linear-gradient(102.46deg, #243430 17.01%, #243430 100.78%);
    border-radius: 3px;
    color: rgb(207, 206, 206);
    padding: 2rem;
    &:hover{
      background: linear-gradient(102.46deg, rgba(47, 51, 46, 0.56) 17.01%, rgba(31, 37, 31, 0.56) 100.78%);
      color: rgb(248, 248, 248);
    }
    p{
      font-size: .9rem;
      font-weight: 500;
    }
  }

  h1{
    margin-top: 0;
    margin-bottom: .5rem;
  }

  h2{
    font-family: 'Viga', sans-serif;
    font-weight: normal;
    margin: 0 0;
    margin-bottom: .5rem;
    text-transform: uppercase;
  }

  p{
    font-weight: 300;
  }
</style>

<i18n>
  {
    "es": {
      "experience" : "Experiencia",
      "description": "Algunas de las empresas y proyectos en los que me he desempeñado 💼",
      "discover": "por descubrir..."
    },
    "en": {
      "description": "The abilities I have forged in space-time 🧑‍💻🚀",
      "discover": "to discover..."
    }
  }
</i18n>