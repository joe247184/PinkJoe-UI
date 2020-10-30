<demo>
  title:自定义内容
  $
  subTitle:Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 rv-button 和 rv-icon 组件的两个样例。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="text" @click="openDialog1">点击打开 Button-Dialog</rv-button>
    <rv-button theme="text" @click="openDialog2">点击打开 Icon-Dialog</rv-button>

    <rv-dialog v-model:visible="dialogVisible1" @ok="onOk1">
      <span>一些按钮</span>
      <div class="rv-row dialog-body">
        <rv-button theme="primary">某按钮</rv-button>
        <rv-button theme="primary" size="small" :loading="true">加载中</rv-button>
      </div>
    </rv-dialog>

    <rv-dialog v-model:visible="dialogVisible2" @ok="onOk2">
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
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  import rvDialog from '../../lib/Dialog.vue'
  import rvIcon from '../../lib/Icon.vue'
  import {ref} from "vue";

  export default {
    name: "Dialog2.demo",
    components: {
      rvDialog, rvButton, rvIcon
    },
    setup(){
      const dialogVisible1 = ref(false)
      const dialogVisible2 = ref(false)

      const openDialog1 = () => {
        dialogVisible1.value = true
      }

      const onOk1 = () => {
        dialogVisible1.value = false
      }

      const openDialog2 = () => {
        dialogVisible2.value = true
      }

      const onOk2 = () => {
        dialogVisible2.value = false
      }

      return {
        dialogVisible1, openDialog1, onOk1,
        dialogVisible2, openDialog2, onOk2
      }
    }
  }
</script>

<style scoped>
  button {
    margin-right: 10px;
  }
</style>