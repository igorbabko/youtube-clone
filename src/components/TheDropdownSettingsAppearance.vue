<template>
  <section class="flex border-b border-gray-200 text-black">
    <button
      @click.stop="$emit('select-menu', 'main')"
      class="px-3 focus:outline-none"
    >
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
        v-for="themeName, themeId in themes"
        :key="themeId"
        :label="themeName"
        :active="themeId === selectedThemeId"
        @click="selectedThemeId = themeId"
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
      selectedThemeId: 0,
      themes: ['Use device theme', 'Dark theme', 'Light theme']
    }
  }
}
</script>
