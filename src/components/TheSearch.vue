<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model:query="query"
        :has-results="results.length"
        @input="updateSearchResults"
        @change-state="toggleSearchResults"
        @keyup.up="handlePreviousSearchResult"
        @keyup.down="handleNextSearchResult"
      />
      <TheSearchResults
        v-show="isSearchResultsShown"
        :results="results"
        :active-result-id="activeSearchResultId"
      />
    </div>
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'

export default {
  components: {
    TheSearchInput,
    TheSearchButton,
    TheSearchResults
  },

  props: ['searchQuery'],

  emits: ['update-search-query'],

  data () {
    return {
      results: [],
      query: this.searchQuery,
      activeQuery: this.searchQuery,
      isSearchResultsShown: false,
      activeSearchResultId: null,
      keywords: [
        'new york giants',
        'new york alicia keys',
        'new york giants vs washington football',
        'new york',
        'new york song',
        'new york new york frank sinatra',
        'new york jets',
        'new york city',
        'new york giants live',
        'new york state of mind',
        'new york giants vs washington football live',
        'new york giants injury',
        'new york giants live stream',
        'new york accent'
      ]
    }
  },

  computed: {
    trimmedQuery () {
      return this.query.replace(/\s+/g, ' ').trim()
    }
  },

  watch: {
    query (query) {
      this.$emit('update-search-query', query)
    }
  },

  methods: {
    updateSearchResults () {
      this.activeSearchResultId = null
      this.activeQuery = this.query

      if (this.query === '') {
        this.results = []
      } else {
        this.results = this.keywords.filter(result => {
          return result.includes(this.trimmedQuery)
        })
      }

      this.toggleSearchResults(true)
    },

    toggleSearchResults (isSearchInputActive) {
      this.isSearchResultsShown = isSearchInputActive && this.results.length
    },

    handlePreviousSearchResult () {
      if (this.isSearchResultsShown) {
        this.makePreviousSearchResultActive()
      } else {
        this.toggleSearchResults(true)
      }
    },

    handleNextSearchResult () {
      if (this.isSearchResultsShown) {
        this.makeNextSearchResultActive()
      } else {
        this.toggleSearchResults(true)
      }
    },

    makePreviousSearchResultActive () {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = this.results.length - 1
      } else if (this.activeSearchResultId === 0) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId--
      }

      this.updateQueryWithSearchResult()
    },

    makeNextSearchResultActive () {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = 0
      } else if (this.activeSearchResultId + 1 === this.results.length) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId++
      }

      this.updateQueryWithSearchResult()
    },

    updateQueryWithSearchResult () {
      const hasActiveSearchResult = this.activeSearchResultId === null

      this.query = hasActiveSearchResult
        ? this.activeQuery
        : this.results[this.activeSearchResultId]
    }
  }
}
</script>
