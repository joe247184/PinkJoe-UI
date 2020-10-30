<demo>
  title:基本用法
  $
  subTitle:基础的、简洁的标签页。
</demo>

<template>
  <div class="rv-row">
    <rv-tabs v-model:activeName="activeNameBasic">
      <rv-tab-pane label="用户" name="first">
        <div class="demo-tab"><rv-icon name="reeor-fill"></rv-icon>用户管理</div>
      </rv-tab-pane>
      <rv-tab-pane label="配置" name="second">配置管理</rv-tab-pane>
      <rv-tab-pane label="角色" name="third">角色管理</rv-tab-pane>
      <rv-tab-pane label="任务" name="fourth">定时任务补偿</rv-tab-pane>
    </rv-tabs>
  </div>
</template>

<script lang="ts">
  import RvTabs from "../../lib/tab/Tabs.vue";
  import RvTabPane from "../../lib/tab/TabPane.vue";
  import { ref } from "vue";

  export default {
    name: "Switch1.demo",
    components: {
      RvTabs, RvTabPane
    },
    setup() {
      const activeNameBasic = ref('second')

      return {activeNameBasic}
    }
  }
</script>
