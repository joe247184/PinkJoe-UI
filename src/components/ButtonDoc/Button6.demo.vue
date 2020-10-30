<demo>
  title:图标按钮
  $
  subTitle:带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="primary" icon="pic"></rv-button>
    <rv-button theme="primary" icon="seleted"></rv-button>
    <rv-button theme="primary" icon="share"></rv-button>
    <rv-button theme="primary" icon="search">搜索</rv-button>
    <rv-button theme="primary">
      保存
      <rv-icon name="save-fill"></rv-icon>
    </rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  import rvIcon from '../../lib/Icon.vue'
  export default {
    name: "Button6.demo",
    components: {
      rvButton, rvIcon
    }
  }
</script>

<style scoped>
  button{
    margin: 5px;
  }
</style>