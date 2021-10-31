<template>
  <div :class="classes">
    <span v-show="isListening" :class="animationClasses" />
    <button v-bind="$attrs" :class="buttonClasses">
      <BaseIcon name="microphone" />
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  inheritAttrs: false,

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

  data () {
    return {
      classes: ['flex', 'justify-center', 'items-center', 'rounded-full']
    }
  },

  computed: {
    buttonClasses () {
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
