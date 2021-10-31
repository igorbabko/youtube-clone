<template>
  <div class="flex justify-center items-center">
    <span v-show="isListening" :class="animationClasses" />
    <button :class="classes">
      <BaseIcon name="microphone" />
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon
  },

  props: {
    isListening: {
      type: Boolean,
      required: true
    },
    isRecording: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    classes () {
      return [
        this.isListening ? 'bg-red-600' : 'bg-gray-300',
        this.isListening ? 'text-white' : 'text-black',
        'w-16',
        'h-16',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
        'relative',
        'focus:outline-none'
      ]
    },

    animationClasses () {
      return [
        this.isRecording ? 'bg-gray-300' : 'border-gray-300',
        'animate-ping',
        'absolute',
        'w-14',
        'h-14',
        'rounded-full',
        'border'
      ]
    }
  }
}
</script>
