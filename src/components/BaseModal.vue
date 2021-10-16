<template>
  <div class="fixed inset-0 z-10 bg-black bg-opacity-80">
    <div class="bg-white max-w-sm mx-auto my-8">
      <div class="p-2 text-right">
        <BaseModalButtonClose />
      </div>
      <BaseModalBody />
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from './BaseModalButtonClose.vue'
import BaseModalBody from './BaseModalBody.vue'

export default {
  components: {
    BaseModalButtonClose,
    BaseModalBody
  }
}
</script>
