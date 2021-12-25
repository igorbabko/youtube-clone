<template>
  <BaseModal>
    <p class="text-2xl mb-52">Report search predictions</p>
    <template v-slot:footer="{ close }">
      <button
        @click="close"
        class="uppercase text-sm font-medium tracking-wider py-2.5 px-4 ml-auto mr-1 focus:outline-none"
      >
        Cancel
      </button>
      <button
        class="uppercase text-sm font-medium tracking-wider py-2.5 px-4 ml-1 mr-1 text-gray-400 cursor-auto focus:outline-none"
      >
        Report
      </button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue'

export default {
  components: {
    BaseModal
  }
}
</script>
