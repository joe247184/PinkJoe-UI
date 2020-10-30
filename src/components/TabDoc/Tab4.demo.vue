<demo>
  title:禁用
  $
  subTitle:禁用某一项。
</demo>

<template>
  <div class="rv-row">
    <rv-tabs v-model:activeName="activeNameDisabled">
      <rv-tab-pane label="用户" name="first">
        <rv-icon name="Daytimemode"></rv-icon>
        <span class="demo-tab">用户管理</span>
      </rv-tab-pane>
      <rv-tab-pane label="配置" name="second" disabled>配置管理</rv-tab-pane>
      <rv-tab-pane label="角色" name="third">角色管理</rv-tab-pane>
      <rv-tab-pane label="任务" name="fourth">定时任务补偿</rv-tab-pane>
    </rv-tabs>
  </div>
</template>

<script lang="ts">
  import RvTabs from "../../lib/tab/Tabs.vue";
  import RvTabPane from "../../lib/tab/TabPane.vue";
  import RvIcon from '../../lib/Icon.vue'
  import { ref } from "vue";

  export default {
    name: "Switch4.demo",
    components: {
      RvTabs, RvTabPane, RvIcon
    },
    setup() {
      const activeNameDisabled = ref('first')

      return {activeNameDisabled}
    }
  }
</script>
