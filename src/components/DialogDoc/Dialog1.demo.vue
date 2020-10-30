<demo>
  title:基本用法
  $
  subTitle:Dialog 弹出一个对话框，适合需要定制性更大的场景。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="text" @click="openDialog">点击打开 Dialog</rv-button>
    <rv-dialog v-model:visible="dialogVisible" @ok="onOk" width="70%">
      <span>这是一段信息</span>
    </rv-dialog>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  import rvDialog from '../../lib/Dialog.vue'
  import {ref} from "vue";

  export default {
    name: "Dialog1.demo",
    components: {
      rvDialog, rvButton
    },
    setup(){
      const dialogVisible = ref(false)

      const openDialog = () => {
        dialogVisible.value = true
      }

      const onOk = () => {
        dialogVisible.value = false
      }

      return {dialogVisible, openDialog, onOk}
    }
  }
</script>