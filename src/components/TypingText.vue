<script setup>
</script>

<template>
  <span><slot /></span>
</template>

<style scoped>
  span{
    animation: typing 2s steps(20),
      blink .3s infinite step-end alternate;
    border-right: 3px solid rgb(48, 138, 123);
    display: block;
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.5em;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    width: 19.5ch;
  }

  @keyframes typing {
    from { width: 0; }
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }
</style>

