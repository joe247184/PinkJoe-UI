<demo>
  title:基础用法
  $
  subTitle:基础的按钮用法。
</demo>

<template>
  <div class="rv-row">
    <rv-button>默认按钮</rv-button>
    <rv-button theme="primary">主要按钮</rv-button>
    <rv-button theme="success">成功按钮</rv-button>
    <rv-button theme="warning">警告按钮</rv-button>
    <rv-button theme="danger">危险按钮</rv-button>
    <rv-button theme="info">信息按钮</rv-button>
  </div>

  <div class="rv-row">
    <rv-button round>默认按钮</rv-button>
    <rv-button theme="primary" round>主要按钮</rv-button>
    <rv-button theme="success" round>成功按钮</rv-button>
    <rv-button theme="warning" round>警告按钮</rv-button>
    <rv-button theme="danger" round>危险按钮</rv-button>
    <rv-button theme="info" round>信息按钮</rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  export default {
    name: "Button1.demo",
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