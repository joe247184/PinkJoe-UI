<demo>
  title:自定义页头和页脚
  $
  subTitle:可通过具名插槽title、footer自定义页头和页脚。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="text" @click="openDialog">点击打开自定义页头页脚 Dialog</rv-button>
    <rv-dialog v-model:visible="dialogVisible" @ok="onOk">

      <template v-slot:title>自定义页头</template>
      <template v-slot:footer>
        <rv-button @click="onOk" style="margin-right: 15px">自定义按钮1</rv-button>
        <rv-button theme="primary" @click="onOk">自定义按钮2</rv-button>
      </template>
      <span>这是一段信息</span>
    </rv-dialog>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  import rvDialog from '../../lib/Dialog.vue'
  import {ref} from "vue";

  export default {
    name: "Dialog3.demo",
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