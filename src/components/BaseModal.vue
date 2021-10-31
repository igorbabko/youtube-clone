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

    <div v-if="isOpen" class="bg-white max-w-sm m-8 relative">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <div class="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt
        sed dolores minus dicta praesentium ab ipsa, necessitatibus deserunt
        aperiam exercitationem nostrum maiores odio tempore eaque rerum?
        Distinctio maxime veniam optio quos quo facere molestias totam!
        Veritatis saepe aliquid id suscipit! Officia laudantium nesciunt
        expedita libero, facere modi. Rerum, laudantium!
      </div>
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from './BaseModalButtonClose.vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

export default {
  components: {
    BaseModalButtonClose,
    BaseModalOverlay,
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
