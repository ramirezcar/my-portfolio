<script setup>
import SocialNetworks from '@/components/SocialNetworks.vue'
import Landing from '@/components/Landing.vue'
import { defineProps } from 'vue';

const props = defineProps(['id']);
</script>

<template>
  <section class="row h-full" v-bind:id="props.id">
    <div class="bg-text-1 no-select">Web Dev<br/>elo<br/>per</div>
    <div class="bg-text-2 no-select">Front<br/>end<br/> Dev</div>
    <SocialNetworks />
    <Landing />
  </section>
</template>

<style lang="scss" scoped>
</style>