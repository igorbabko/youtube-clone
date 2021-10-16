<template>
  <div class="fixed inset-0 z-10" tabindex="-1" @keydown.esc="close">
    <transition
      appear
      enter-active-class="ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModalOverlay v-if="isOpen" @click="close" />
    </transition>

    <div v-if="isOpen" class="bg-white max-w-sm mx-auto my-8 relative">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <BaseModalBody />
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from './BaseModalButtonClose.vue'
import BaseModalOverlay from './BaseModalOverlay.vue'
import BaseModalBody from './BaseModalBody.vue'

export default {
  components: {
    BaseModalButtonClose,
    BaseModalOverlay,
    BaseModalBody
  },

  emits: ['close'],

  data () {
    return {
      isOpen: true
    }
  },

  mounted () {
    this.$el.focus()
  },

  methods: {
    close () {
      this.isOpen = false

      setTimeout(() => this.$emit('close'), 100)
    }
  }
}
</script>
