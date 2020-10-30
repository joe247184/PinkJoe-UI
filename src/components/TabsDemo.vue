<template>
  <h1>Tabs 标签页</h1>
  <p class="demo-block">分隔内容上有关联但属于不同类别的数据集合。</p>

  <!-- basic -->
  <DemoBlock :component="tab1demo">
    Tabs 组件提供了选项卡功能，通过<code>v-model</code>传入表示当前页的<code>name</code>的变量，
    给定初始选中标签页的名称是必须的，否则会报错哟。
  </DemoBlock>

  <!-- type card -->
  <DemoBlock :component="tab2demo">
    只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。
  </DemoBlock>

  <!-- type border-card -->
  <DemoBlock :component="tab3demo">
    设置 <code>type</code> 属性为 <code>border-card</code> 。
  </DemoBlock>

  <!-- disabled -->
  <DemoBlock :component="tab4demo">
    设置 <code>type</code> 属性为 <code>border-card</code> 。
  </DemoBlock>
</template>

<script lang="ts">
  import tab1demo from './TabDoc/Tab1.demo.vue'
  import tab2demo from './TabDoc/Tab2.demo.vue'
  import tab3demo from './TabDoc/Tab3.demo.vue'
  import tab4demo from './TabDoc/Tab4.demo.vue'

  export default {
    name: "TabsDemo",
    setup(){
      return {
        tab1demo, tab2demo, tab3demo, tab4demo
      }
    }
  }
</script>

<style scoped lang="scss">

</style>