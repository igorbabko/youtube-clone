<template>
  <BaseModal>
    <p class="text-2xl mb-52">{{ text }}</p>
    <TheButtonSearchWithVoice
      :is-listening="isListening"
      :is-recording="isRecording"
      @click="record"
    />
    <div :class="buttonHintClasses">
      Tap the microphone to try again
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue'
import TheButtonSearchWithVoice from './TheButtonSearchWithVoice.vue'

export default {
  components: {
    BaseModal,
    TheButtonSearchWithVoice
  },

  data () {
    return {
      isListening: true,
      isRecording: false
    }
  },

  computed: {
    text () {
      return this.isListening ? 'Listening...' : 'Microphone off. Try again.'
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
  },

  methods: {
    record () {
      if (this.isRecording) {
        this.isRecording = false
        this.isListening = false
      } else if (this.isListening) {
        this.isRecording = true
      } else {
        this.isListening = true
      }
    }
  }
}
</script>
