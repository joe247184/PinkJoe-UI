<demo>
  title:文字按钮
  $
  subTitle:没有边框和背景色的按钮。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="text">文字按钮</rv-button>
    <rv-button theme="text" disable>文字按钮</rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  export default {
    name: "Button4.demo",
    components: {
      rvButton
    }
  }
</script>

<style scoped>
  button{
    margin: 5px;
  }
</style>