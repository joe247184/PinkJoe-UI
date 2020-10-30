<template>
  <svg class="rv-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
  import './common/iconfont'
  import './common/common.scss'

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