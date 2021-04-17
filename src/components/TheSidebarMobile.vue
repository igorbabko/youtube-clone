<template>
  <TheSidebarMobileOverlay>
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button class="ml-2 mr-6 focus:outline-none">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </section>
      <SidebarContent />
    </aside>
  </TheSidebarMobileOverlay>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import SidebarContent from './SidebarContent.vue'
import LogoMain from './LogoMain.vue'
import TheSidebarMobileOverlay from './TheSidebarMobileOverlay.vue'

export default {
  components: {
    BaseIcon,
    SidebarContent,
    LogoMain,
    TheSidebarMobileOverlay
  }
}
</script>
