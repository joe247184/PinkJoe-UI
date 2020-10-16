<template>
  <svg class="rv-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "RvIcon",
    props: {
      fill: String,
      name: String
    }
  }
</script>

<style lang="scss">
  .rv-icon {

  }
</style>