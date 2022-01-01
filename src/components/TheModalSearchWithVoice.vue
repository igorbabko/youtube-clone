<template>
  <BaseModal class="max-w-2xl" with-close-button>
    <p class="text-2xl mb-52">{{ text }}</p>
    <TheButtonSearchWithVoice @change-text="text = $event" />
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
      text: null
    }
  }
}
</script>
