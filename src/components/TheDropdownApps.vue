<template>
  <div
    class="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0"
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
</template>

<script>
import DropdownAppsListItem from './DropdownAppsListItem.vue'

export default {
  components: {
    DropdownAppsListItem
  }
}
</script>
