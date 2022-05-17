<template lang="">
  <div>
    <Experience></Experience>
    <a @click="handleClick">
      <DownButton></DownButton>
    </a>
    <Skills></Skills>
  </div>
</template>
<script setup>
  import Skills from "@/components/experience/Skills.vue";
  import Experience from "@/components/experience/Experience.vue";
  import DownButton from "@/components/utils/DownButton.vue";

  const handleClick = (e) => {
    scroll({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }
</script>
<style lang="">
    
</style>