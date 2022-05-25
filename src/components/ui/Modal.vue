<script setup>
  import { ref, watch } from 'vue'
  const props = defineProps({
    active: Boolean,
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    content: {
      type: String
    }
  })

  const modal = ref()

  // When the user clicks on the button, open the modal
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }

  // When the user clicks on <span> (x), close the modal
  const toggleModal = () => {
    let displayStyle = modal.value.style.display
    modal.value.style.display = displayStyle === 'block' ? 'none' : 'block'
  }

  // watch(active, async (new, old) => {
  //   toggleModal
  // })

  watch(props.active, async (newValue, oldValue) => {
    console.log(newValue, oldValue)
    toggleModal
  })

</script>
<template lang="">
  <!-- The Modal -->
  <div
    id="myModal"
    ref="modal"
    class="modal-bg"
    :style="!active ? {display: 'none'} : {display: 'block'}"
  >
    <!-- Modal content -->
    <div class="modal-content">
      <span
        class="close"
        @click="toggleModal"
      >&times;</span>
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>

<style lang="scss">
  .modal-bg {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.66); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: var(--color-black);
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid var(--color-gray);
  max-width: 640px; /* Could be more or less, depending on screen size */
}
</style>