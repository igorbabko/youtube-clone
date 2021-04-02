<template>
  <section
    class="pt-14 md:pl-24 xl:pl-64 w-full fixed bg-white bg-opacity-95 z-10"
  >
    <div class="border-t border-b px-4 max-w-screen-2xl m-auto">
      <div
        class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap"
      >
        <a
          v-for="category in categories"
          :key="category"
          href="#"
          class="px-3 py-1 transition bg-gray-600 border border-gray-700 rounded-full hover:bg-gray-500 text-white"
        >
          {{ category }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        'All',
        'Trucks',
        'Tools',
        'Machines',
        'Engines',
        'Snow',
        'Ships',
        'Roads',
        'Tanks',
        'Building',
        'Mars',
        'Woodworking',
        'Tractors',
        'Songs',
        'Shows',
        'Football',
        'Planes',
        'Live',
        'Streets',
        'Math',
        'Programming'
      ]
    }
  }
}
</script>
