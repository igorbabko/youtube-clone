<template>
  <div class="relative">
    <textarea
      v-bind="$attrs"
      v-model="modelValue"
      @input="adjustHeight"
      :maxlength="limit"
      ref="textarea"
      placeholder="Provide additional details (optional)"
      class="border rounded-sm pt-2 pb-8 px-2 resize-none w-full focus:outline-none overflow-hidden peer"
    />
    <BaseTextareaCounter>{{ counter }}</BaseTextareaCounter>
  </div>
</template>

<script>
import BaseTextareaCounter from './BaseTextareaCounter.vue'

export default {
  components: {
    BaseTextareaCounter
  },

  props: {
    modelValue: String,
    limit: Number
  },

  computed: {
    counter () {
      return `${this.modelValue.length} / ${this.limit}`
    }
  },

  mounted () {
    this.adjustHeight()
  },

  methods: {
    adjustHeight () {
      this.$refs.textarea.style.height = 'auto'
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`
    }
  }
}
</script>
