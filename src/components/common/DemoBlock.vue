<template>
  <section class="demo-block">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <p>{{component.__sourceCodeSubTitle}}</p>

    <div class="source">
      <div class="rv-row">
        <component :is="component" :key="component"></component>
      </div>
    </div>

    <div class="meta">
      <div class="description" v-if="$slots.default">
        <div class="description-slot"><p>
          <slot></slot>
        </p></div>
      </div>
      <div class="code">
        <pre class="language-html" v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"></pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import 'prismjs'
  import 'prismjs/themes/prism.css'

  const Prism = (window as any).Prism

  export default {
    name: "DemoBlock",
    props: {
      component: {
        type: Object,
        require: true
      }
    },
    setup() {
      return {Prism}
    }
  }
</script>

<style lang="scss">
  .description {
    .description-slot{
      code {
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
        font-family: Menlo,Monaco,Consolas,Courier,monospace;
      }
    }
  }
</style>