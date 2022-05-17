<script setup>
  const props = defineProps(['code'])
  const getImageUrl = (code) =>
    new URL(`../../assets/img/flags/${code}.svg`, import.meta.url).href
</script>

<template>
  <img
    :src="getImageUrl(props.code)"
    :alt="`flag-${props.code}`"
  >
</template>

<style scoped>
  img {
    /* border: 1px solid #eeeeee; */
    max-width: 24px;
    margin-left: .5em;
  }
</style>