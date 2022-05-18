
<script setup>
  import Skills from "@/components/experience/Skills.vue"
  import Experience from "@/components/experience/Experience.vue"
  import DownButton from "@/components/experience/DownButton.vue"

  const handleClick = () => {
    scroll({
      top: document.body.scrollHeight,
      behavior: "smooth"
    })
  }
</script>
<template lang="">
  <div>
    <Experience />
    <a @click="handleClick">
      <DownButton />
    </a>
    <Skills />
  </div>
</template>
<style lang="">
    
</style>