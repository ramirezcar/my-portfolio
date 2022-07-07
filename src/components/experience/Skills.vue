<script setup>
  import skills from "@/resources/skills"
  import { useI18n } from 'vue-i18n'
  import { onMounted } from "vue"
  import AOS from "aos"
  import Animation from "@/components/utils/Animation.vue"
  import SectionHeader from "../ui/SectionHeader.vue"
  // import bootstrapImg from "@/assets/img/skills/bootstrap.png"

  const { locale } = useI18n()
  const { t } = useI18n()

  // const modalInfo = ref({ 
  //   // active: false,
  //   info: null
  // })

  // const modal = ref()

  // const openModal = (item) => {
  //   const {name, description} = item
  //   // modalInfo.value.active = true
  //   modalInfo.value.info = {title: name, content: description}
  //   console.log(modal)
  //   modal.value.classList.add('d-none')
  // }

  const getImageUrl = (name) =>
    new URL(`../../../img/skills/${name}.png`, import.meta.url).href

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
          <a
            v-for="(skill) in skills[locale]"
            :key="skill"
            class="item focus-anim"
          >
            <!-- @click="openModal(skill)" -->
            <h2 class="text-primary">
              {{ skill.name }}
            </h2>
            <!-- <h2 class="text-primary">{{ skill.name + t('skills[0]') }}</h2> -->
            <p>{{ skill.description }}</p>
            <!-- <img
              :src="getImageUrl(skill.name.toLowerCase())"
              alt=""
            > -->
            <img
              :src="`../../../img/skills/${skill.name}.png`"
              alt=""
            >
          </a>
        </div>
      </div>
    </Animation>
    <!-- <Modal
      :ref="modal"
    /> -->
  </section>
</template>
<style lang="scss" scoped>
  .d-none{
    display: none;
  }
  .grid{
    display: grid;
    // grid-auto-rows: 12rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:    1rem;
    margin-top: 1.5rem;
    width: 100%;
  }

  .item{
    backdrop-filter: blur(7px);
    background: linear-gradient(102.46deg, rgba(20, 31, 28, 0.581) 17.01%, rgba(20, 31, 28, 0.56) 100.78%);
    border-radius: 3px;
    color: rgb(202, 202, 202);
    min-height: 144px;
    padding: 1.8rem;
    &:hover{
      background: linear-gradient(102.46deg, rgba(24, 24, 22, 0.56) 17.01%, rgba(27, 35, 28, 0.56) 100.78%);
      color: rgb(234, 234, 234);
    }
    p{
      font-size: .9rem;
      font-weight: 500;
      // text-align: justify;
    }
    img{
      bottom: 1em;
      position: absolute;
      right: 1em;
      width: 140px;
      z-index: -2;
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
      "description": "Las habilidades que he forjado en el espacio-tiempo (y para qué me han servido)🧑‍💻🚀"
    },
    "en": {
      "skills" : "Skills",
      "description": "The abilities I have forged in space-time 🧑‍💻🚀"
    }
  }
</i18n>