<!--
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </div>
 -->

<template>
  <h1>Tabs 标签页</h1>
  <p class="demo-block">分隔内容上有关联但属于不同类别的数据集合。</p>

  <section class="demo-block">
    <h2>基础用法</h2>
    <p>基础的、简洁的标签页。</p>

    <div class="source">
      <div class="rv-row">
        <rv-tabs>
          <rv-tab-pane></rv-tab-pane>
        </rv-tabs>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
  import RvTabs from "../lib/tab/Tabs.vue";
  import RvTabPane from "../lib/tab/Tab.vue";

  export default {
    name: "TabsDemo",
    components: {RvTabPane, RvTabs}
  }
</script>

<style scoped lang="scss">

</style>