<template>
  <TheDropdownSettingsHeader
    title="Appearance"
    @back="$emit('select-menu', 'main')"
  />
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
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

export default {
  components: {
    DropdownSettingsHeader,
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
