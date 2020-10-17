<template>
  <h1>Dialog 对话框</h1>
  <p class="demo-block">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

  <section class="demo-block">
    <h2>基本用法</h2>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>

    <div class="source">
      <div class="rv-row">
        <rv-button theme="text" @click="openDialog1">点击打开 Dialog</rv-button>
        <rv-dialog v-model:visible="dialogVisible1" @ok="onOk1" width="30%">
          <span>这是一段信息</span>
        </rv-dialog>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>自定义内容</h2>
    <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 rv-button 和 rv-icon 组件的两个样例。</p>

    <div class="source">
      <div class="rv-row">
        <rv-button theme="text" @click="openDialog2">点击打开 Button-Dialog</rv-button>
        <rv-button theme="text" @click="openDialog3">点击打开 Icon-Dialog</rv-button>

        <rv-dialog v-model:visible="dialogVisible2" @ok="onOk2">
          <span>一堆按钮</span>
          <div class="rv-row dialog-body">
            <rv-button theme="primary">某按钮</rv-button>
            <rv-button theme="info">某按钮</rv-button>
            <rv-button theme="warning">某按钮</rv-button>
            <rv-button theme="success">某按钮</rv-button>
            <rv-button theme="primary" size="small" :loading="true">加载中</rv-button>
          </div>
        </rv-dialog>

        <rv-dialog v-model:visible="dialogVisible3" @ok="onOk3">
          <span>自行添加<code>font-size</code>样式可调整图标大小</span>
          <div class="rv-row dialog-body dialog-icon">
            <rv-icon name="reeor-fill"></rv-icon>
            <rv-icon name="resonserate-fill"></rv-icon>
            <rv-icon name="remind-fill"></rv-icon>
            <rv-icon name="save-fill"></rv-icon>
            <rv-icon name="smile-fill"></rv-icon>
            <rv-icon name="suspended-fill"></rv-icon>
          </div>
        </rv-dialog>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import RvDialog from '../lib/Dialog.vue'
  import { ref, Ref } from 'vue'
  import RvButton from "../lib/Button.vue";
  import RvIcon from "../lib/Icon.vue";

  export default {
    name: "DialogDemo",
    components: {
      RvIcon,
      RvButton,
      RvDialog
    },
    setup() {
      const dialogVisible1 = ref(false)
      const dialogVisible2 = ref(false)
      const dialogVisible3 = ref(false)

      const open = (val: Ref<boolean>) => {
        val.value = true
      }

      const close = (val: Ref<boolean>) => {
        val.value = false
      }

      const openDialog1 = () => {
        open(dialogVisible1)
      }

      const onOk1 = () => {
        close(dialogVisible1)
      }

      const openDialog2 = () => {
        open(dialogVisible2)
      }

      const onOk2 = () => {
        close(dialogVisible2)
      }

      const openDialog3 = () => {
        open(dialogVisible3)
      }

      const onOk3 = () => {
        close(dialogVisible2)
      }

      return {dialogVisible1, dialogVisible2, dialogVisible3, openDialog1, openDialog2, openDialog3, onOk1, onOk2, onOk3}
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
    &.dialog-icon .rv-icon{
      font-size: 30px;
    }
  }
</style>