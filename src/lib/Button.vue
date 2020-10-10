<!--
  <rv-button
    theme="button | link | text"
    @click=""
    @mouseover=""
  ></rv-button>
-->

<template>
  <button
      class="rv-button"
      :class="`rv-button-${theme}`">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "RvButton",
    props:{
      theme: {
        type: String,
        default: 'default'
      }
    }
  }
</script>

<style lang="scss">
  @import 'common/variables.scss';
  $radius: 4px;
  .rv-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    outline: none;
    margin: 0;
    font-weight: 500;
    padding: 12px 20px;
    border-radius: $radius;
    &:focus {
      color: $color-primary;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
</style>