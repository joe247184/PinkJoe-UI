<demo>
  title:加载中
  $
  subTitle:点击按钮后进行数据加载操作，在按钮上显示加载状态。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="primary" :loading="true">加载中</rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  export default {
    name: "Button5.demo",
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