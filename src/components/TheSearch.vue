<template>
  <div class="flex w-full mr-2">
    <TheSearchInput />
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'

export default {
  components: {
    TheSearchInput,
    TheSearchButton
  }
}
</script>
