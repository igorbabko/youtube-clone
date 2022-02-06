<template>
  <div class="relative">
    <textarea
      v-bind="$attrs"
      v-model="modelValue"
      @input="adjustHeight"
      :maxlength="limit"
      placeholder="Provide additional details (optional)"
      class="border rounded-sm pt-2 pb-5 px-2 resize-none w-full focus:outline-none peer"
    />
    <BaseTextareaCounter>{{ counter }}</BaseTextareaCounter>
  </div>
</template>

<script>
import BaseTextareaCounter from './BaseTextareaCounter.vue'

export default {
  components: { BaseTextareaCounter },

  props: {
    modelValue: String,
    limit: Number
  },

  computed: {
    counter () {
      return `${this.modelValue.length} / ${this.limit}`
    }
  },

  methods: {
    adjustHeight ({ target: textarea }) {
      textarea.style.overflow = 'hidden'
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }
}
</script>
