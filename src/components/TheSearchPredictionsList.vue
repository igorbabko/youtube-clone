<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div
      v-for="(label, index) in searchPredictions"
      :key="label"
      class="flex items-center"
    >
      <BaseCheckbox
        :id="`search-prediction-${index}`"
        :value="label"
        v-bind="$attrs"
        v-model="modelValue"
      >
        {{ label }}
      </BaseCheckbox>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from './BaseCheckbox.vue'

export default {
  components: {
    BaseCheckbox
  },

  props: {
    searchPredictions: Array,
    modelValue: Array
  }
}
</script>
