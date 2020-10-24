<template>
  <h1>Tabs 标签页</h1>
  <p class="demo-block">分隔内容上有关联但属于不同类别的数据集合。</p>

  <section class="demo-block">
    <h2>基础用法</h2>
    <p>基础的、简洁的标签页。</p>

    <div class="source">
      <div class="rv-row">
        <rv-tabs v-model:activeName="activeNameBasic">
          <rv-tab-pane label="用户管理" name="first">
            <div class="demo-tab"><rv-icon name="reeor-fill"></rv-icon>用户管理</div>
          </rv-tab-pane>
          <rv-tab-pane label="配置管理" name="second">配置管理</rv-tab-pane>
          <rv-tab-pane label="角色管理" name="third">角色管理</rv-tab-pane>
          <rv-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</rv-tab-pane>
        </rv-tabs>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>选项卡样式</h2>
    <p>选项卡样式的标签页。</p>

    <div class="source">
      <div class="rv-row">
        <rv-tabs v-model:activeName="activeNameCustom" type="card">
          <rv-tab-pane label="用户管理" name="first">
              <rv-icon name="Daytimemode"></rv-icon>
              <span class="demo-tab">用户管理</span>
          </rv-tab-pane>
          <rv-tab-pane label="配置管理" name="second">配置管理</rv-tab-pane>
          <rv-tab-pane label="角色管理" name="third">角色管理</rv-tab-pane>
          <rv-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</rv-tab-pane>
        </rv-tabs>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>卡片化</h2>
    <p>卡片化的标签页。</p>

    <div class="source">
      <div class="rv-row">
        <rv-tabs v-model:activeName="activeNameTypeBorderCard" type="border-card">
          <rv-tab-pane label="用户管理" name="first">
            <rv-icon name="Daytimemode"></rv-icon>
            <span class="demo-tab">用户管理</span>
          </rv-tab-pane>
          <rv-tab-pane label="配置管理" name="second">配置管理</rv-tab-pane>
          <rv-tab-pane label="角色管理" name="third">角色管理</rv-tab-pane>
          <rv-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</rv-tab-pane>
        </rv-tabs>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
  import RvTabs from "../lib/tab/Tabs.vue";
  import RvTabPane from "../lib/tab/TabPane.vue";
  import { ref } from "vue";
  import RvIcon from '../lib/Icon.vue'

  export default {
    name: "TabsDemo",
    components: {RvTabPane, RvTabs,RvIcon},
    setup(){
      const activeNameBasic = ref('second')

      const activeNameCustom = ref('first')

      const activeNameTypeBorderCard = ref('first')

      return {
        activeNameBasic, activeNameCustom, activeNameTypeBorderCard
      }
    }
  }
</script>

<style scoped lang="scss">

</style>