<demo>
  title:基本用法
  $
  subTitle:基本的用法。
</demo>

<template>
  <div class="rv-row">
    <rv-switch v-model:value="value"></rv-switch>
  </div>
</template>

<script lang="ts">
  import rvSwitch from "../../lib/Switch.vue";
  import { ref } from "vue";

  export default {
    name: "Switch1.demo",
    components: {
      rvSwitch
    },
    setup() {
      const value = ref(false)

      return {value}
    }
  }
</script>
