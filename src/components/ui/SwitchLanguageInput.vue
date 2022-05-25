<script setup>
  import { defineAsyncComponent, watch } from "vue"
  import { useI18n } from "vue-i18n"
  const BaseFlag = defineAsyncComponent(() => import("./SwitchLanguageFlag.vue"))
  const { locale } = useI18n()
  const languages = [
    { key: "es", label: "Español" },
    { key: "en", label: "English" },
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

<style lang="scss" scoped>
  div{
    display: flex;
  }
  @media (max-width: 640px) {
    select{
      padding: 0 1em;
      height: 2.2rem;
    }
    img {
      display: none;
    }
  }
</style>