<demo>
  title:禁用状态
  $
  subTitle:禁用状态下的组件。
</demo>

<template>
  <div class="rv-row">
    <rv-switch v-model:value="valueUnchecked" disabled></rv-switch>
    <rv-switch v-model:value="valueChecked" disabled></rv-switch>
  </div>
</template>

<script lang="ts">
  import rvSwitch from "../../lib/Switch.vue";
  import { ref } from "vue";

  export default {
    name: "Switch2.demo",
    components: {
      rvSwitch
    },
    setup() {
      const valueChecked = ref(true)
      const valueUnchecked = ref(false)

      return {valueChecked, valueUnchecked}
    }
  }
</script>

<style scoped>

</style>