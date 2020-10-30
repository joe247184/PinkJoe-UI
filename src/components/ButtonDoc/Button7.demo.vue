<demo>
  title:事件绑定
  $
  subTitle:可以对按钮绑定 @click 事件。
</demo>

<template>
  <div class="rv-row">
    <rv-button theme="primary" @click="greeting">greeting</rv-button>
  </div>
</template>

<script>
  import rvButton from '../../lib/Button.vue'

  export default {
    name: "Button7.demo",
    components: {
      rvButton
    },
    setup(){
      const greeting = () => {
        alert('hi!!')
      }

      return {greeting}
    }
  }
</script>

<style scoped>
  button{
    margin: 5px;
  }
</style>