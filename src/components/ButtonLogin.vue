<template>
  <button :class="classes">
    <BaseIcon name="userCircle" class="mr-2 w-7 h-7" />
    Sign In
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon
  },

  computed: {
    classes () {
      return (
        this.$attrs.class ||
        'focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm'
      )
    }
  }
}
</script>
