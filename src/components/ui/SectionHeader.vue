<script setup>
  const props = defineProps({
    text: String
  })
</script>
<template lang="">
  <h1 class="text-primary-gradient pulse-bg">
    {{ props.text }}
  </h1>
</template>
<style lang="scss" scoped>
  h1{
    margin-top: 0;
    margin-bottom: .5rem;
    font-size: 10ch;
    // font-weight: 900;
    letter-spacing: -7px;
    line-height: 90%;
    text-transform: lowercase;
  }
  @media (max-width: 640px){
    h1{
      font-size: 7ch;
    }
  }
</style>