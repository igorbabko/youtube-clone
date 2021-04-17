<template>
  <aside
    class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20"
  >
    <SidebarContent />
  </aside>
</template>

<script>
import SidebarContent from './SidebarContent.vue'

export default {
  components: {
    SidebarContent
  }
}
</script>
