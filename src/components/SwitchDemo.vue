<template>
  <h1>Switch 开关</h1>
  <p class="demo-block">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

  <DemoBlock :component="switch1demo"></DemoBlock>
</template>

<script lang="ts">
  import rvSwitch from "../lib/Switch.vue";
  import switch1demo from './SwitchDoc/Switch1.demo.vue'

  export default {
    name: "SwitchDemo",
    components: {
      rvSwitch
    },
    setup() {
      return {switch1demo}
    }
  }
</script>

<style scoped>

</style>