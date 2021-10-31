<template>
  <BaseModal>
    <p class="text-2xl mb-52">{{ text }}</p>
    <div class="flex justify-center items-center">
      <span
        v-show="isListening"
        class="animate-ping absolute w-14 h-14 rounded-full border border-gray-300"
      ></span>
      <button :class="buttonClasses" @click="isListening = !isListening">
        <BaseIcon name="microphone" />
      </button>
    </div>
    <div :class="buttonHintClasses">
      Tap the microphone to try again
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue'
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseModal,
    BaseIcon
  },

  data () {
    return {
      isListening: false
    }
  },

  computed: {
    text () {
      return this.isListening ? 'Listening...' : 'Microphone off. Try again.'
    },

    buttonClasses () {
      return [
        this.isListening ? 'bg-red-700' : 'bg-gray-300',
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

    buttonHintClasses () {
      return [
        this.isListening ? 'invisible' : 'visible',
        'text-center',
        'text-sm',
        'text-gray-500',
        'mt-4'
      ]
    }
  }
}
</script>
