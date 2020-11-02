<demo>
  title:自定义长度
  $
  subTitle:自定义长度。
</demo>

<template>
  <div class="rv-row">
    <rv-switch v-model:value="value" width="75px"></rv-switch>
  </div>
</template>

<script lang="ts">
  import rvSwitch from "../../lib/Switch.vue";
  import { ref } from "vue";

  export default {
    name: "Switch4.demo",
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