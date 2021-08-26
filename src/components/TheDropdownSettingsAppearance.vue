<template>
  <section class="flex border-b border-gray-200 text-black">
    <button @click.stop="$emit('select-menu', 'main')" class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" />
    </button>
    <span class="py-3">Appearance</span>
  </section>
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems"
        :key="listItem.label"
        :label="listItem.label"
        :active="listItem.active"
      />
    </ul>
  </section>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

export default {
  components: {
    BaseIcon,
    DropdownSettingsListItem
  },

  emits: ['select-menu'],

  data () {
    return {
      listItems: [
        {
          label: 'Use device theme',
          active: true
        },
        {
          label: 'Dark theme',
          active: false
        },
        {
          label: 'Light theme',
          active: false
        }
      ]
    }
  }
}
</script>
