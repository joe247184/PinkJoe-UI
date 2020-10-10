<template>
  <div>button-demo</div>

  <section>
    <h1>基础用法</h1>
    <rv-button>hello</rv-button>
    <rv-button theme="button">hello</rv-button>
    <rv-button theme="link">hello</rv-button>
    <rv-button theme="text">hello</rv-button>
  </section>

</template>

<script>
  import rvButton from '../lib/Button.vue'

  export default {
    name: "ButtonDemo",
    components:{
      rvButton
    }
  }
</script>

<style scoped>

</style>