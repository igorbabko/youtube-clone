<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search"
      v-bind="$attrs"
      :class="classes"
      :value="query"
      @input="updateQuery($event.target.value)"
    />
    <button
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      v-show="query"
      @click="updateQuery('')"
    >
      <BaseIcon name="x" class="w-5 w-5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  inheritAttrs: false,

  components: {
    BaseIcon
  },

  props: ['query'],

  emits: ['update:query'],

  data () {
    return {
      classes: [
        'w-full',
        'h-full',
        'px-3',
        'shadow-inner',
        'rounded-bl-sm',
        'rounded-tl-sm',
        'border',
        'border-gray-300',
        'focus:border-blue-700',
        'focus:outline-none'
      ]
    }
  },

  mounted () {
    if (window.innerWidth < 640) {
      this.$el.focus()
    }

    document.addEventListener('keydown', this.onKeydown)
  },

  methods: {
    onKeydown (event) {
      const isInputFocused = this.$refs.input === document.activeElement

      if (event.code === 'Slash' && !isInputFocused) {
        event.preventDefault()

        this.$refs.input.focus()
      }
    },

    updateQuery (query) {
      this.$emit('update:query', query)
    }
  }
}
</script>
