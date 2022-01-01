<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>
    <TheSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="searchPredictions"
    />
    <template #footer="{ close }">
      <BaseButton @click="close" class="ml-auto mr-1">
        Cancel
      </BaseButton>
      <BaseButton class="mx-1 text-gray-400 cursor-auto" disabled>
        Report
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script>
import BaseButton from './BaseButton.vue'
import BaseModal from './BaseModal.vue'
import TheSearchPredictionsList from './TheSearchPredictionsList.vue'

export default {
  components: {
    BaseButton,
    BaseModal,
    TheSearchPredictionsList
  },

  props: {
    searchPredictions: Array
  },

  data () {
    return {
      selectedSearchPredictions: []
    }
  }
}
</script>
