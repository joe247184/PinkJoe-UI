<template>
  <h1>Switch 开关</h1>
  <p class="demo-block">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

  <section class="demo-block">
    <h2>{{switch1demo.__sourceCodeTitle}}</h2>
    <p>{{switch1demo.__sourceCodeSubTitle}}</p>

    <div class="source">
      <div class="rv-row">
<!--        <rv-switch v-model:value="value"></rv-switch>-->
        <component :is="switch1demo" :key="switch1demo"></component>
      </div>
    </div>

    <div class="meta">
      <div class="description">
        <div><p>绑定<code>v-model</code>到一个Boolean类型的变量。</p></div>
      </div>
      <div class="code">
<!--        Prism.highlight(code, Prism.languages.javascript, 'javascript');-->
        <pre class="language-html" v-html="Prism.highlight(switch1demo.__sourceCode, Prism.languages.html, 'html')"></pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import rvSwitch from "../lib/Switch.vue";
  import switch1demo from './SwitchDoc/Switch1.demo.vue'
  import { ref } from "vue";
  import 'prismjs'
  import 'prismjs/themes/prism.css'

  const Prism = (window as any).Prism
  console.log(Prism)

  export default {
    name: "SwitchDemo",
    components: {
      rvSwitch
    },
    setup() {
      const value = ref(false)

      return {value, switch1demo, Prism}
    }
  }
</script>

<style scoped>

</style>