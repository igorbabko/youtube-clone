<template>
  <div class="relative">
    <BaseTooltip text="YouTube apps">
      <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
        <BaseIcon name="viewGrid" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        ref="dropdown"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        :class="dropdownClasses"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownAppsListItem label="YouTube TV" />
          </ul>
        </section>
        <section class="py-2 border-b">
          <ul>
            <DropdownAppsListItem label="YouTube Music" />
            <DropdownAppsListItem label="YouTube Kids" />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownAppsListItem label="Creator Academy" />
            <DropdownAppsListItem label="YouTube for Artists" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'
import DropdownAppsListItem from './DropdownAppsListItem.vue'

export default {
  components: {
    BaseIcon,
    BaseTooltip,
    DropdownAppsListItem
  },

  data () {
    return {
      isOpen: false,
      dropdownClasses: [
        'z-10',
        'absolute',
        'top-9',
        'right-0',
        'sm:left-0',
        'bg-white',
        'w-60',
        'border',
        'border-t-0',
        'focus:outline-none'
      ]
    }
  },

  watch: {
    isOpen () {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    }
  },

  mounted () {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    })
  }
}
</script>
