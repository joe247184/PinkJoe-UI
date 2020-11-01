<demo>
  title:代码打开 Dialog
  $
  subTitle:Dialog 代码打开 Dialog。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="text" @click="openDialogByCode">点击代码打开 Dialog</rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'
  import {openDialog} from "../../lib/openDialog";

  export default {
    name: "Dialog1.demo",
    components: {
      rvButton
    },
    setup(){
      const openDialogByCode = () => {
        openDialog({
          title: '这是代码打开 Dialog',
          content: 'hello'
        })
      }

      return {openDialogByCode}
    }
  }
</script>