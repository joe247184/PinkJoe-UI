<template>
  <div>
    <rv-switch v-model:value="value"></rv-switch>
  </div>
</template>

<script lang="ts">
  import rvSwitch from "../lib/Switch.vue";
  import { ref } from "vue";

  export default {
    name: "SwitchDemo",
    components: {
      rvSwitch
    },
    setup() {
      const value = ref(false)

      return {value}
    }
  }
</script>

<style scoped>

</style>