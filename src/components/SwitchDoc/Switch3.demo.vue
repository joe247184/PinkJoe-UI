<demo>
  title:自定义颜色
  $
  subTitle:自定义选中和为被选中的颜色。
</demo>

<template>
  <div class="rv-row">
    <rv-switch v-model:value="value" active-color="#f56c6c" inactive-color="#303133"></rv-switch>
  </div>
</template>

<script lang="ts">
  import rvSwitch from "../../lib/Switch.vue";
  import { ref } from "vue";

  export default {
    name: "Switch3.demo",
    components: {
      rvSwitch
    },
    setup() {
      const value = ref(true)

      return {value}
    }
  }
</script>

<style scoped>

</style>