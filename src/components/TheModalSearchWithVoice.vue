<template>
  <BaseModal>
    <p class="text-2xl mb-52">Microphone off. Try again.</p>
    <button
      class="w-16 h-16 mx-auto bg-gray-300 rounded-full text-black flex justify-center items-center relative focus:outline-none"
    >
      <BaseIcon name="microphone" />
    </button>
    <div class="text-center text-sm text-gray-500 mt-4">
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
  }
}
</script>
