<template>
  <h1>Switch 开关</h1>
  <p class="demo-block">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

  <!-- basic -->
  <DemoBlock :component="switch1demo"></DemoBlock>

  <!-- disabled -->
  <DemoBlock :component="switch2demo">
    设置<code>disabled</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即可禁用。
  </DemoBlock>

  <!-- custom color -->
  <DemoBlock :component="switch3demo">
    可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色。
  </DemoBlock>

  <!-- custom width -->
  <DemoBlock :component="switch4demo">
    可以使用<code>width</code>属性来设置开关的长度。默认长度为44px，切勿设置的过长或者过短影响视觉展示效果。
  </DemoBlock>

</template>

<script lang="ts">
  import rvSwitch from "../lib/Switch.vue";
  import switch1demo from './SwitchDoc/Switch1.demo.vue'
  import switch2demo from './SwitchDoc/Switch2.demo.vue'
  import switch3demo from './SwitchDoc/Switch3.demo.vue'
  import switch4demo from './SwitchDoc/Switch4.demo.vue'

  export default {
    name: "SwitchDemo",
    components: {
      rvSwitch
    },
    setup() {
      return {switch1demo, switch2demo, switch3demo, switch4demo}
    }
  }
</script>

<style lang="scss">
  .rv-switch{
    margin-right: 15px;
  }
</style>