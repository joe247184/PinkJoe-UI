<template>
  <h1>Switch 开关</h1>
  <p class="demo-block">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

  <demo-block :component="switch1demo">
    使用<code>theme</code>、<code>round</code>属性来定义 Button 的样式。
  </demo-block>
</template>

<script lang="ts">
  import rvSwitch from "../lib/Switch.vue";
  import switch1demo from './SwitchDoc/Switch1.demo.vue'
  import DemoBlock from "./common/DemoBlock.vue";

  console.log(switch1demo)

  export default {
    name: "SwitchDemo",
    components: {
      rvSwitch, DemoBlock
    },
    setup() {
      return {switch1demo}
    }
  }
</script>

<style scoped>

</style>