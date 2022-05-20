
<script setup>
  import Experience from "@/components/experience/Experience.vue"
  import Skills from "@/components/experience/Skills.vue"
  import DownButton from "@/components/experience/DownButton.vue"
  import { ref, onMounted } from "vue"

  const disableButton = ref(false)
  const handleClick = () => {
    scroll({
      top: document.body.scrollHeight,
      behavior: "smooth"
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', () => {
      disableButton.value = window.scrollY > 300
    })
  })
</script>
<template lang="">
  <Experience />
  <a
    @click="handleClick"
  >
    <DownButton :hide="disableButton" />
  </a>
  <Skills />
</template>
<style lang="">
    
</style>