<template>
  <TheHeader />
  <TheSidebarSmall />
  <TheSidebar />
  <TheSidebarMobile />
  <TheCategories />
  <TheVideos />
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
  }
}
</script>
