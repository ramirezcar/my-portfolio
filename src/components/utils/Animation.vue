<template lang="">
  <div 
    :data-aos="props.aosAnimation || 'fade-up'"
    :data-aos-duration="props.duration || 2000"
    :data-aos-delay="props.delay || 200"
  >
    <slot></slot>
  </div>
</template>
<script setup>
  import { onMounted } from "vue";
  import AOS from "aos";
  const props = defineProps(['aos-animation', 'duration', 'delay'])
  
  onMounted(() => {
      AOS.init();
  })
</script>
<style lang="">
  
</style>