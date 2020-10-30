<template>
  <h1>Dialog 对话框</h1>
  <p class="demo-block">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

  <!-- basic -->
  <DemoBlock :component="dialog1demo">
    需要设置<code>v-model:visible</code>，它接收<code>Boolean</code>，当为<code>true</code>时显示 Dialog。
    Dialog 分为两个部分：
    <code>body</code>和<code>footer</code>，<code>footer</code>需要具名为<code>footer</code>的<code>slot</code>。
    <code>title</code>属性用于定义标题，它是可选的，默认值为空。
  </DemoBlock>

  <!-- custom-body -->
  <DemoBlock :component="dialog2demo"></DemoBlock>

  <!-- custom-header-footer -->
  <DemoBlock :component="dialog3demo">
    通过利用具名插槽分别自定义页头和页脚，插槽名分别为<code>title</code>、<code>footer</code>。
    具体语法可参考 <a href="https://vue3js.cn/docs/zh/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD">vue3文档</a>
  </DemoBlock>

  <!-- open dialog by code -->
  <DemoBlock :component="dialog4demo"></DemoBlock>

</template>

<script lang="ts">
  import dialog1demo from './DialogDoc/Dialog1.demo.vue'
  import dialog2demo from './DialogDoc/Dialog2.demo.vue'
  import dialog3demo from './DialogDoc/Dialog3.demo.vue'
  import dialog4demo from './DialogDoc/Dialog4.demo.vue'


  export default {
    name: "DialogDemo",
    setup() {
      return {
        dialog1demo, dialog2demo, dialog3demo, dialog4demo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rv-row {
    > button:not(:last-child) {
      margin-right: 15px;
    }
  }

  .dialog-body {
    margin-top: 20px;

    &.dialog-icon .rv-icon {
      font-size: 30px;
    }
  }

  a {
    color: #1890FF;
  }
</style>