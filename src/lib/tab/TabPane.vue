<template>
  <slot></slot>
</template>

<script lang="ts">
  export default {
    name: "RvTabPane",
    props: {
      label: String,
      name: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props){

    }
  }
</script>

<style lang="scss">

</style>