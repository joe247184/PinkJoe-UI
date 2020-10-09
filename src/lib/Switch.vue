<template>
  <button :class="{checked: value}" @click="toggleSwitch">
    <span></span>
  </button>
</template>

<script lang="ts">
  export default {
    name: "rvSwitch",
    props: {
      value: {
        type: Boolean
      }
    },
    setup(props: { value: Boolean | String; }, context: { emit: (arg0: string, arg1: boolean) => void }){
      const toggleSwitch = () => {
        context.emit('update:value', !props.value)
      }

      return {
        toggleSwitch
      }
    }
  }
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  $active-color: #13ce66;
  $un-active-color: #DCDFE6;
  button {
    height: $h;
    width: $h * 2;
    border-radius: $h/2;
    border: none;
    background-color: $un-active-color;
    position: relative;
    outline: none;
  }

  span {
    height: $h2;
    width: $h2;
    background: white;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all .3s;
  }

  button.checked {
    background-color: $active-color;
    > span{
      left: calc(100% - #{$h2} - 2px);
    }
  }

</style>