<demo>
  title:禁用状态
  $
  subTitle:按钮不可用状态。
</demo>

<template>
  <div class="rv-row">
    <rv-button disable>默认按钮</rv-button>
    <rv-button theme="primary" disable>主要按钮</rv-button>
    <rv-button theme="success" disable>成功按钮</rv-button>
    <rv-button theme="warning" disable>警告按钮</rv-button>
    <rv-button theme="danger" disable>危险按钮</rv-button>
    <rv-button theme="info" disable>信息按钮</rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  export default {
    name: "Button3.demo",
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