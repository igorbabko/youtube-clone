<template>
  <li>
    <a href="#" class="flex items-center pl-5 pr-8 py-2 text-sm hover:bg-gray-200">
      <BaseIcon :name="icon" class="w-5 h-5 mr-4 text-gray-400" />
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

  props: {
    label: String,
    icon: String
  }
}
</script>
