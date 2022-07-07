<script setup>
  const props = defineProps({
    class: String,
    href: String
  })
</script>

<template>
  <a
    :class="[props.class, 'button']"
    :href="props.href"
    target="_blank"
  >
    <slot />
  </a>
</template>

<style lang="scss">
  @import '@/assets/variables.scss';
  .button{
    &.primary{
      background-image: linear-gradient(270.05deg, #21B08E 4.92%, #3B9FA6 96.41%);
      color: aliceblue;
      &:hover{
        background-image: linear-gradient(270.05deg, lighten(#21B08E, 5%) 4.92%, lighten(#3B9FA6, 5%) 96.41%);
        box-shadow: 1px 0 15px #21b08f63;
      }
    }
    &.secondary{
      background: 
        linear-gradient(to right, rgba(42, 59, 55, 0.918), rgba(42, 59, 55, 0.918)),
        linear-gradient(270.05deg, lighten(#21B08E, 5%) 4.92%, lighten(#3B9FA6, 5%) 96.41%);
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      border: 2px solid transparent;
      color: var(--color-primary);
      &:hover{
        background: linear-gradient(to right, lighten(rgba(42, 59, 55, 0.918), 5), lighten(rgba(42, 59, 55, 0.918), 5)),
        linear-gradient(270.05deg, lighten(#21B08E, 5%) 4.92%, lighten(#3B9FA6, 5%) 96.41%);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        border: 2px solid transparent;
      }
    }
    align-items: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Viga', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    padding: .8em 3em;
    svg{
      vertical-align: middle; 
      margin-right:8px;
    }
  }

</style>