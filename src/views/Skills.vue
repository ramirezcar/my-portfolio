<template>
  <div class="content container">
    <Animation aos-animation="fade-left" duration="2000" delay="150">
      <div class="flex-between">
          <h1 class="text-primary-gradient pulse-bg">skills</h1>
          <p class="">{{t('description')}}</p>
          <div class="grid">
            <div class="item" v-for="(skill, index) in skills">
              <h2 class="text-primary">{{skill.name}}</h2>
              <p>{{skill.description}}</p>
            </div>
          </div>
      </div>
    </Animation>
  </div>
</template>

<script setup>
  import skills from "@/resources/skills";
  import { useI18n } from 'vue-i18n'
  import { onMounted } from "vue";
  import AOS from "aos";
import Animation from "../components/utils/Animation.vue";

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

  .grid{
    display: grid;
    grid-auto-rows: 240px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap:    12px;
    grid-column-gap: 1rem;
    margin-top: 1.5rem;
    width: 100%;
  }

  .item{
    background: linear-gradient(102.46deg, rgba(20, 31, 28, 0.56) 17.01%, rgba(20, 31, 28, 0.56) 100.78%);
    border-radius: 3px;
    padding: 2rem;
    p{
      font-size: .9rem;
      font-weight: 500;
    }
  }

  h1{
    margin-bottom: .5rem;
  }

  h2{
    margin: 0 0;
  }

  p{
    font-weight: 300;
  }
</style>

<i18n>
  {
    "es": {
      "description": "Las habilidades que he forjado en el espacio-tiempo 🧑‍💻🚀"
    },
    "en": {
      "description": "The abilities I have forged in space-time 🧑‍💻🚀"
    }
  }
</i18n>