<template>
  <div class="rv-overlay">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: "RvOverlay"
  }
</script>

<style lang="scss">
  .rv-overlay{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    background-color: rgba(0,0,0,.45);
    filter: alpha(opacity=50);
  }
</style>