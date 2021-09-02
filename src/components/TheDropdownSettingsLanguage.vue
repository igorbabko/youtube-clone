<template>
  <DropdownSettingsHeader
    title="Choose your language"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        v-for="(languageName, languageId) in languages"
        :key="languageId"
        :label="languageName"
        :active="languageId === selectedLanguageId"
        @click="selectedLanguageId = languageId"
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
      selectedLanguageId: 0,
      languages: ['English', 'Russian']
    }
  }
}
</script>
