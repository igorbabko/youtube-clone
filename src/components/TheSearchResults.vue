<template>
  <div :class="classes">
    <ul>
      <li
        v-for="(text, id) in results"
        :key="text"
        :class="getItemClasses(id)"
        @mouseenter="$emit('search-result-mouseenter', id)"
        @mouseleave="$emit('search-result-mouseleave')"
        @click.stop="$emit('search-result-click')"
      >
        <span @mouseenter="$emit('search-result-mouseenter', id)">
          {{ text }}
        </span>
      </li>
    </ul>
    <a
      href="#"
      :class="reportLinkClasses"
      @click="openReportSearchPredictionsModal"
    >
      Report search predictions
    </a>
    <teleport to="body">
      <TheModalReportSearchPredictions
        v-if="isReportSearchPredictionsModalOpen"
        @close="isReportSearchPredictionsModalOpen = false"
      />
    </teleport>
  </div>
</template>

<script>
import TheModalReportSearchPredictions from './TheModalReportSearchPredictions.vue'

export default {
  components: {
    TheModalReportSearchPredictions
  },

  props: ['results', 'activeResultId'],

  emits: [
    'search-result-mouseenter',
    'search-result-mouseleave',
    'search-result-click',
    'close'
  ],

  data () {
    return {
      isReportSearchPredictionsModalOpen: false,
      classes: [
        'absolute',
        'top-full',
        'w-full',
        'bg-white',
        'border',
        'border-t-0',
        'border-gray-300',
        'shadow-md',
        'pt-4'
      ],
      reportLinkClasses: [
        'w-full',
        'inline-block',
        'text-right',
        'text-xs',
        'italic',
        'text-gray-500',
        'hover:text-black',
        'pr-2'
      ]
    }
  },

  methods: {
    getItemClasses (resultId) {
      return [
        resultId === this.activeResultId ? 'bg-gray-100' : 'bg-transparent',
        'text-black',
        'px-3',
        'py-1',
        'select-none',
        'truncate'
      ]
    },

    openReportSearchPredictionsModal () {
      this.isReportSearchPredictionsModalOpen = true

      this.$emit('close')
    }
  }
}
</script>
