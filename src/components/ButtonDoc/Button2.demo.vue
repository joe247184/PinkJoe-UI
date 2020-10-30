<demo>
  title:不同尺寸
  $
  subTitle:Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
</demo>

<template>
  <div class="rv-row">
    <rv-button>默认按钮</rv-button>
    <rv-button size="medium">中等按钮</rv-button>
    <rv-button size="small">小型按钮</rv-button>
    <rv-button size="mini">超小按钮</rv-button>
  </div>

  <div class="rv-row">
    <rv-button round>默认按钮</rv-button>
    <rv-button size="medium" round>中等按钮</rv-button>
    <rv-button size="small" round>小型按钮</rv-button>
    <rv-button size="mini" round>超小按钮</rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  export default {
    name: "Button2.demo",
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