<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search"
      :class="classes"
      v-model="searchQuery"
    />
    <button
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      v-show="query"
      @click="searchQuery = ''"
    >
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
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

  computed: {
    searchQuery: {
      get () {
        return this.query
      },

      set (searchQuery) {
        this.$emit('update:query', searchQuery)
      }
    }
  },

  mounted () {
    if (window.innerWidth < 640) {
      this.$el.focus()
    }
  }
}
</script>
