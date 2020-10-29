<template>
  <rv-switch v-model:value="value"></rv-switch>
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
