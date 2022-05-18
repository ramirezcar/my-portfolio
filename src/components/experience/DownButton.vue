<template lang="">
  <div>
    <small>{{ t('skills') }}</small>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-double-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
      <path
        fill-rule="evenodd"
        d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
</template>
<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>
<style lang="scss" scoped>
  div{
    cursor: pointer;
    opacity: 1;
    // left: 50%;
    -webkit-animation: bounce-37a6547c 2s infinite 2s;
    animation: bounce-37a6547c 2s infinite 2s;
    filter: drop-shadow(3px 5px 3px rgb(0 0 0 / 1));
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 45px;
    display: flex;
    position: absolute;
    width: 100%;
    z-index: 1;
    small {
      font-family: 'Viga';
      font-size: .8rem;
      text-transform: uppercase;
      top: calc(50% - 42px);
      width: max-content;
    }
    svg{
      fill: var(--color-secondary);
      height: 26px;
      width: 26px;
    }
  }

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      transform: translateY(-15px);
    }
    60% {
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      transform: translateY(-5px);
    }
  }
  @media (max-width: 960px) and (min-height: 1050px){
    *{
      display: none;
    }
  }
</style>

<i18n>
{
  "en": {
    "skills": "My Skills",
  },
  "es": {
    "skills": "Mis Habilidades",
  }
}
</i18n>