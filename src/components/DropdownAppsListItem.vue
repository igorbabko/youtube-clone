<template>
  <li>
    <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <BaseIcon name="play" class="w-6 h-6 mr-3 text-red-500" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    BaseIcon
  },

  props: ['label']
}
</script>
