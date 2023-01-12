<script setup>
  import projects from "@/resources/projects"
  import { useI18n } from 'vue-i18n'
  import { onMounted } from "vue"
  import AOS from "aos"
  import Animation from "@/components/utils/Animation.vue"
  import SectionHeader from "@/components/ui/SectionHeader.vue"
  import ProjectCard from "@/components/projects/ProjectCard.vue"

  const { t } = useI18n()
  const { locale } = useI18n()

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
      class="w-100"
    >
      <div class="flex-between bordered">
        <SectionHeader :text="t('projects')" />
        <p class="">
          {{ t('description') }}
        </p>
        <div class="grid">
          <div
            v-for="(project) in projects[locale]"
            :key="project"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </Animation>
  </section>
</template>
<style lang="scss" scoped>
  .content {
    padding: 6rem 0;
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap:    1rem;
    margin-top: 1.5rem;
    >*{
      margin: auto;
      width: 100%;
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
      "projects" : "Proyectos",
      "description": "Proyectos y experimentos esporádicos con los que he adquirido conocimientos🌠"
    },
    "en": {
      "projects" : "Projects",
      "description": "The abilities I have forged in space-time 🌠"
    }
  }
</i18n>