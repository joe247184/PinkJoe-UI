<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
  export default {
    name: "Markdown",
    props: {
      content: {
        require: true,
        type: String
      }
    }
  }
</script>

<style scoped>

</style>