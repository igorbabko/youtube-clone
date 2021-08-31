<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems.slice(0, 8)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="$emit('select-menu', 'appearance')"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        :label="listItems[8].label"
        :with-sub-menu="listItems[8].withSubMenu"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

export default {
  components: {
    DropdownSettingsListItem
  },

  emits: ['select-menu'],

  data () {
    return {
      listItems: [
        {
          label: 'Appearance: Light',
          icon: 'sun',
          withSubMenu: true
        },
        {
          label: 'Language: English',
          icon: 'translate',
          withSubMenu: true
        },
        {
          label: 'Location: Ukraine',
          icon: 'globeAlt',
          withSubMenu: true
        },
        {
          label: 'Settings',
          icon: 'cog',
          withSubMenu: false
        },
        {
          label: 'Your data in YouTube',
          icon: 'shieldCheck',
          withSubMenu: false
        },
        {
          label: 'Help',
          icon: 'questionMarkCircle',
          withSubMenu: false
        },
        {
          label: 'Send feedback',
          icon: 'chatAlt',
          withSubMenu: false
        },
        {
          label: 'Keyboard shortcuts',
          icon: 'calculator',
          withSubMenu: false
        },
        {
          label: 'Restricted Mode: Off',
          icon: null,
          withSubMenu: true
        }
      ]
    }
  }
}
</script>
