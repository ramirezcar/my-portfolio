<script setup>
  import skills from "@/resources/skills"
  import { useI18n } from 'vue-i18n'
  import { onMounted } from "vue"
  import AOS from "aos"
  import Animation from "@/components/utils/Animation.vue"
  import SectionHeader from "../ui/SectionHeader.vue"

  const { locale } = useI18n()
  const { t } = useI18n()

  onMounted(() => {
    AOS.init()
  })
</script>

<template>
  <section class="content container">
    <Animation
      aos-animation="fade-down"
      duration="2000"
      delay="150"
    >
      <div class="flex-between bordered">
        <SectionHeader :text="t('skills')" />
        <p class="">
          {{ t('description') }}
        </p>
        <div class="grid">
          <div
            v-for="(skill) in skills[locale]"
            :key="skill"
            class="item focus-anim"
          >
            <h2 class="text-primary">
              {{ skill.name }}
            </h2>
            <!-- <h2 class="text-primary">{{ skill.name + t('skills[0]') }}</h2> -->
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </Animation>
  </section>
</template>
<style lang="scss" scoped>
  .grid{
    display: grid;
    // grid-auto-rows: 12rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:    1rem;
    margin-top: 1.5rem;
    width: 100%;
  }

  .item{
    background: linear-gradient(102.46deg, rgba(20, 31, 28, 0.56) 17.01%, rgba(20, 31, 28, 0.56) 100.78%);
    border-radius: 3px;
    padding: 2rem;
    color: rgb(202, 202, 202);
    &:hover{
      background: linear-gradient(102.46deg, rgba(24, 24, 22, 0.56) 17.01%, rgba(27, 35, 28, 0.56) 100.78%);
      color: rgb(234, 234, 234);
    }
    p{
      font-size: .9rem;
      font-weight: 500;
    }
  }

  @media (max-width: 640px){
    .item{
      padding: 1em;
    }
  }

  @media (max-width: 960px){
    .grid{
      grid-template-columns: 1fr 1fr;
      margin-top: 1em;
    }

    .item{
      padding: 1.5rem;
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

<i18n lang="json">
  {
    "es": {
      "skills" : "Habilidades",
      "description": "Las habilidades que he forjado en el espacio-tiempo 🧑‍💻🚀"
    },
    "en": {
      "skills" : "Skills",
      "description": "The abilities I have forged in space-time 🧑‍💻🚀"
    }
  }
</i18n>