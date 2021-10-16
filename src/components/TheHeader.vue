<template>
  <header :class="classes">
    <div :class="leftSideClasses">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
          @click="$emit('toggleSidebar')"
          class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchWrapper
      v-show="isSearchShown"
      :is-small-screen="isSmallScreen"
      @close="closeMobileSearch"
      @open-voice-modal="isVoiceModalOpen = true"
    />
    <div :class="rightSideClasses">
      <BaseTooltip text="Search with your voice">
        <button
          class="sm:hidden p-2 focus:outline-none"
          @click="isVoiceModalOpen = true"
        >
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button
          @click.stop="isMobileSearchActive = true"
          class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <TheDropdownApps />
      <TheDropdownSettings />
      <ButtonLogin />
    </div>
  </header>
  <teleport to="body">
    <BaseModal v-if="isVoiceModalOpen" @close="isVoiceModalOpen = false">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate
      modi quibusdam alias, beatae tenetur quia eos totam nam iure veritatis
      quod mollitia optio ipsa esse corporis expedita! Corporis nam
      exercitationem nostrum, nulla amet aut rem animi aliquid quibusdam illum
      rerum voluptatibus dolor voluptatem eveniet possimus! Itaque qui repellat
      quaerat.
    </BaseModal>
  </teleport>
</template>

<script>
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
import BaseModal from './BaseModal.vue'
import BaseTooltip from './BaseTooltip.vue'
import LogoMain from './LogoMain.vue'
import ButtonLogin from './ButtonLogin.vue'
import TheSearchWrapper from './TheSearchWrapper.vue'
import TheDropdownApps from './TheDropdownApps.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'

export default {
  components: {
    BaseIcon,
    BaseModal,
    BaseTooltip,
    LogoMain,
    ButtonLogin,
    TheSearchWrapper,
    TheDropdownApps,
    TheDropdownSettings
  },

  provide () {
    return {
      isMobileSearchActive: computed(() => this.isMobileSearchActive)
    }
  },

  emits: {
    toggleSidebar: null
  },

  data () {
    return {
      isSmallScreen: false,
      isVoiceModalOpen: false,
      isMobileSearchActive: false,
      classes: [
        'flex',
        'justify-between',
        'w-full',
        'bg-white',
        'bg-opacity-95'
      ]
    }
  },

  computed: {
    isSearchShown () {
      return this.isMobileSearchShown || !this.isSmallScreen
    },

    isMobileSearchShown () {
      return this.isSmallScreen && this.isMobileSearchActive
    },

    leftSideClasses () {
      return ['lg:w-1/4', 'flex', this.opacity]
    },

    rightSideClasses () {
      return [
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3',
        'p-2',
        'sm:px-4',
        this.opacity
      ]
    },

    opacity () {
      return this.isMobileSearchShown ? 'opacity-0' : 'opacity-100'
    }
  },

  mounted () {
    this.onResize()

    window.addEventListener('resize', this.onResize)
  },

  methods: {
    onResize () {
      if (window.innerWidth < 640) {
        this.isSmallScreen = true
        return
      }

      this.closeMobileSearch()
      this.isSmallScreen = false
    },

    closeMobileSearch () {
      this.isMobileSearchActive = false
    }
  }
}
</script>
