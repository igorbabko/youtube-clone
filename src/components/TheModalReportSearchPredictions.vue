<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>
    <div class="space-y-3 text-black text-sm mt-5">
      <div
        v-for="(text, index) in searchPredictions"
        :key="text"
        class="flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          class="h-5 w-5 cursor-pointer"
          :id="index"
          :value="text"
          v-model="selectedSearchPredictions"
        />
        <label :for="index" class="ml-4 cursor-pointer flex-grow">
          {{ text }}
        </label>
      </div>
    </div>
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
  },

  data () {
    return {
      selectedSearchPredictions: [],
      searchPredictions: [
        'new york',
        'new york song',
        'new york alicia keys',
        'new york live camera',
        'new york state of mind',
        'new york accent',
        'new york nagaram whatsapp status',
        'new york snng tik tok',
        'new york new york frank sinatra',
        'new york nagaram',
        'new york jazz',
        'new york full movie',
        'new york vlog',
        'new york jay z'
      ]
    }
  }
}
</script>
