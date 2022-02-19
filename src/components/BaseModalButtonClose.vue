<template>
  <button class="p-2 focus:outline-none" data-testid="base-modal-button-close">
    <BaseIcon name="x" />
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon
  }
}
</script>
