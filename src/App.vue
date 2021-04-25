<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <TheSidebarSmall :is-open="sidebarState === 'compact'" />
  <TheSidebar :is-open="sidebarState === 'normal'" />
  <TheSidebarMobile
    :is-open="isMobileSidebarOpen"
    @close="closeMobileSidebar"
  />
  <TheCategories :is-sidebar-open="sidebarState === 'normal'" />
  <TheVideos :is-sidebar-open="sidebarState === 'normal'" />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheSidebarSmall from './components/TheSidebarSmall.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheSidebarMobile from './components/TheSidebarMobile.vue'
import TheCategories from './components/TheCategories.vue'
import TheVideos from './components/TheVideos.vue'

export default {
  components: {
    TheHeader,
    TheSidebarSmall,
    TheSidebar,
    TheSidebarMobile,
    TheCategories,
    TheVideos
  },

  data () {
    return {
      isMobileSidebarOpen: false,
      sidebarState: null
    }
  },

  mounted() {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.sidebarState = 'compact'
    }

    if (window.innerWidth >= 1280) {
      this.sidebarState = 'normal'
    }
  },

  methods: {
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.sidebarState = this.sidebarState === 'normal' ? 'compact' : 'normal'
      } else {
        this.openMobileSidebar()
      }
    },

    openMobileSidebar () {
      this.isMobileSidebarOpen = true
    },

    closeMobileSidebar () {
      this.isMobileSidebarOpen = false
    }
  }
}
</script>
