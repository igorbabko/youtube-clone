<template>
  <DropdownSettingsHeader
    title="Choose your location"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(locationName, locationId) in locations"
        :key="locationId"
        :label="locationName"
        :active="locationId === selectedOptions.location.id"
        @click="selectOption({ id: locationId, text: locationName })"
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
      locations: ['United States', 'Russia']
    }
  },

  methods: {
    selectOption (location) {
      this.$emit('select-option', { name: 'location', value: location })
    }
  }
}
</script>
