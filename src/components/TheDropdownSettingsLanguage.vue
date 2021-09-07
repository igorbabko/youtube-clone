<template>
  <DropdownSettingsHeader
    title="Choose your language"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(languageName, languageId) in languages"
        :key="languageId"
        :label="languageName"
        :active="languageId === selectedOptions.languageId"
        @click="selectOption(languageId)"
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

  props: ['selectedOptions'],

  emits: ['select-menu', 'select-option'],

  data () {
    return {
      selectedLanguageId: 0,
      languages: ['English', 'Russian']
    }
  },

  methods: {
    selectOption (languageId) {
      this.$emit('select-option', { name: 'languageId', value: languageId })
    }
  }
}
</script>
