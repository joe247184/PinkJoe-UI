<template>
  <h1>Switch 开关</h1>
  <p class="demo-block">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

  <section class="demo-block">
    <h2>基本用法</h2>
    <p>基本的用法。</p>

    <div class="source">
      <div class="rv-row">
<!--        <rv-switch v-model:value="value"></rv-switch>-->
        <switch1demo></switch1demo>
      </div>
    </div>

    <div class="meta">
      <div class="description">
        <div><p>绑定<code>v-model</code>到一个Boolean类型的变量。</p></div>
      </div>
      <div class="code">
        <code>&lt;rv-switch v-model:value=&quot;value&quot;&gt;&lt;/rv-switch&gt;</code>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import rvSwitch from "../lib/Switch.vue";
  import switch1demo from './SwitchDoc/Switch1.demo.vue'
  import { ref } from "vue";

  export default {
    name: "SwitchDemo",
    components: {
      rvSwitch, switch1demo
    },
    setup() {
      const value = ref(false)

      return {value}
    }
  }
</script>

<style scoped>

</style>