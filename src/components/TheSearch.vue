<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput v-model:query="query" />
      <TheSearchResults v-show="results.length" :results="results" />
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

  data () {
    return {
      query: '',
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
    results () {
      if (!this.query) {
        return []
      }

      return this.keywords.filter(result => {
        return result.includes(this.trimmedQuery)
      })
    },

    trimmedQuery () {
      return this.query.replace(/\s+/g, ' ').trim()
    }
  }
}
</script>
