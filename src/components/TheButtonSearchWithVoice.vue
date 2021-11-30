<template>
  <div class="flex justify-center items-center">
    <span
      v-show="isStatus('listening', 'recording')"
      :class="buttonAnimationClasses"
    />
    <button :class="buttonClasses" @click="toggleRecording">
      <BaseIcon name="microphone" />
    </button>
  </div>
  <div :class="buttonHintClasses">
    Tap the microphone to try again
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

const STATUS_IDLE = 'idle'
const STATUS_LISTENING = 'listening'
const STATUS_RECORDING = 'recording'
const STATUS_QUIET = 'quiet'

export default {
  components: {
    BaseIcon
  },

  emits: ['change-text'],

  data () {
    return {
      status: STATUS_LISTENING,
      recordingTimeout: null
    }
  },

  computed: {
    buttonClasses () {
      const bgColorClass = this.isStatus(STATUS_LISTENING, STATUS_RECORDING)
          ? 'bg-red-600'
          : 'bg-gray-300'

      const textColorClass = this.isStatus(STATUS_LISTENING, STATUS_RECORDING)
          ? 'text-white'
          : 'text-black'

      return [
        bgColorClass,
        textColorClass,
        'w-16',
        'h-16',
        'mx-auto',
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
        this.isStatus(STATUS_LISTENING, STATUS_RECORDING) ? 'invisible' : 'visible',
        'text-center',
        'text-sm',
        'text-gray-500',
        'mt-4'
      ]
    },

    buttonAnimationClasses () {
      return [
        this.isStatus(STATUS_RECORDING) ? 'bg-gray-300' : 'border border-gray-300',
        'animate-ping',
        'absolute',
        'w-14',
        'h-14',
        'rounded-full'
      ]
    }
  },

  watch: {
    status: {
      handler () {
        let text = 'Microphone off. Try again.'

        if (this.isStatus(STATUS_QUIET)) {
          text = "Didn't hear that. Try again."
        } else if (this.isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
          text = 'Listening...'
        }

        this.$emit('change-text', text)
      },
      immediate: true
    }
  },

  mounted () {
    this.handleRecordingTimeout()
  },

  beforeUnmount () {
    clearTimeout(this.recordingTimeout)
  },

  methods: {
    toggleRecording () {
      clearTimeout(this.recordingTimeout)

      this.updateStatus()

      this.handleRecordingTimeout()
    },

    updateStatus (status) {
      if (status) {
        this.status = status
      } else if (this.isStatus(STATUS_RECORDING)) {
        this.status = STATUS_IDLE
      } else if (this.isStatus(STATUS_LISTENING)) {
        this.status = STATUS_RECORDING
      } else {
        this.status = STATUS_LISTENING
      }
    },

    handleRecordingTimeout () {
      if (this.isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
        this.recordingTimeout = setTimeout(() => {
          this.updateStatus(STATUS_QUIET)
        }, 5000)
      }
    },

    isStatus (...statuses) {
      return statuses.includes(this.status)
    }
  }
}
</script>
