<template>
  <DropdownSettingsHeader title="Choose your language" @back="$emit('close')" />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(languageName, languageId) in languages"
        :key="languageId"
        :label="languageName"
        :active="languageId === selectedOptions.language.id"
        @click="selectOption({ id: languageId, text: languageName })"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from '../mixins/dropdownSubmenu'

export default {
  mixins: [dropdownSubmenu],

  data () {
    return {
      optionName: 'language',
      languages: ['English', 'Russian']
    }
  }
}
</script>
