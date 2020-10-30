<template>
  <h1>Button 按钮</h1>
  <p class="demo-block">常用的操作按钮。</p>

  <!-- basic -->
  <DemoBlock :component="button1demo">
    使用<code>theme</code>、<code>round</code>属性来定义 Button 的样式。
  </DemoBlock>

  <!-- size -->
  <DemoBlock :component="button2demo">
    额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置size属性来配置它们。
  </DemoBlock>

  <!-- disabled -->
  <DemoBlock :component="button3demo">
    你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。
  </DemoBlock>

  <!-- text -->
  <DemoBlock :component="button4demo">
    设置<code>theme</code>属性为<code>text</code>值。
  </DemoBlock>

  <!-- loading -->
  <DemoBlock :component="button5demo">
    要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。
  </DemoBlock>

  <!-- icon-button -->
  <DemoBlock :component="button6demo">
    设置<code>icon</code>属性即可，也可以设置在文字右边的 icon ，只要使用<code>rv-icon</code>标签即可，可以使用自定义图标。
  </DemoBlock>

  <!-- event -->
  <DemoBlock :component="button7demo">
    添加<code>@click</code>，事件将会直接绑定在原生 button 上。
  </DemoBlock>

</template>

<script>
  import RvButton from '../lib/Button.vue'
  import RvIcon from "../lib/Icon.vue";
  import button1demo from "./ButtonDoc/Button1.demo.vue";
  import button2demo from "./ButtonDoc/Button2.demo.vue";
  import button3demo from './ButtonDoc/Button3.demo.vue';
  import button4demo from './ButtonDoc/Button4.demo.vue';
  import button5demo from './ButtonDoc/Button5.demo.vue';
  import button6demo from './ButtonDoc/Button6.demo.vue';
  import button7demo from './ButtonDoc/Button7.demo.vue';

  export default {
    name: "ButtonDemo",
    components:{
      RvIcon,
      RvButton
    },
    setup(){
      const greeting = () => {
        alert('hi!!')
      }

      return {greeting, button1demo, button2demo, button3demo, button4demo, button5demo, button6demo, button7demo}
    }
  }
</script>

<style lang="scss" scoped>
  section.demo-block .source .rv-row button{
    margin-right: 15px;
  }
</style>