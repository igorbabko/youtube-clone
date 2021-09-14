import DropdownSettingsHeader from '../components/DropdownSettingsHeader.vue'
import DropdownSettingsListItem from '../components/DropdownSettingsListItem.vue'

export default {
  components: {
    DropdownSettingsHeader,
    DropdownSettingsListItem
  },

  props: ['selectedOptions'],

  emits: ['close', 'select-option'],

  data () {
    return {
      optionName: null
    }
  },

  methods: {
    selectOption (option) {
      this.$emit('select-option', { name: this.optionName, value: option })
    }
  }
}
