<template>
  <div tabindex="-1" :class="classes" @keydown.esc="close">
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

    <div v-if="isOpen" :class="bodyClasses">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from './BaseModalButtonClose.vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

export default {
  components: {
    BaseModalButtonClose,
    BaseModalOverlay
  },

  emits: ['close'],

  data () {
    return {
      isOpen: true,
      classes: [
        'fixed',
        'inset-0',
        'z-30',
        'flex',
        'justify-center',
        'items-start'
      ],
      bodyClasses: [
        'bg-white',
        'w-full',
        'sm:w-3/4',
        'md:w-2/3',
        'lg:w-3/5',
        'xl:w-2/5',
        'max-w-3xl',
        'm-4',
        'sm:m-8',
        'relative'
      ]
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
