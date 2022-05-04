<script setup>
  import { defineAsyncComponent, watch } from "vue"
  import { useI18n } from "vue-i18n"
  const BaseFlag = defineAsyncComponent(() => import("./BaseFlag.vue"))
  const { locale } = useI18n()
  const languages = [
    { key: "en", label: "English" },
    { key: "es", label: "Español" },
  ]
  watch(locale, () => {
    localStorage.setItem("locale", locale.value)
  })
</script>

<template>
  <div class="">
    <select
      v-model="locale"
      class=""
    >
      <option
        v-for="language in languages"
        :key="language.key"
        :value="language.key"
      >
        {{ language.label }}
      </option>
    </select>
    <BaseFlag :code="locale" />
  </div>
</template>

<style scoped>
  div{
    display: flex;
  }
</style>