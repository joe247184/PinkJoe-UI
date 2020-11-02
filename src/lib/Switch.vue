<template>
  <button
      class="rv-switch"
      :class="{
        'rv-switch-checked': value,
        'rv-switch-disabled': disabled
      }"
      :style="style"
      @click="toggleSwitch"
      ref="switchCore"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
  import {computed, onMounted, ref, watch} from 'vue'

  export default {
    name: "RvSwitch",
    props: {
      value: {
        type: Boolean
      },
      disabled: {
        type: Boolean,
        default: false
      },
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      }
    },
    setup(props, context: { emit: (arg0: string, arg1: boolean) => void }){
      const checked = computed(()=>props.value)
      const switchCore = ref(null)
      let style = {} as CSSStyleDeclaration

      const toggleSwitch = () => {
        if(props.disabled) return
        context.emit('update:value', !props.value)
      }

      const setBackgroundColor = () => {
        switchCore.value.style.backgroundColor = props.value ? props.activeColor : props.inactiveColor
      }

      if(props.width) {
        style.width = props.width
      }

      onMounted(()=>{
        setBackgroundColor()

        watch(checked, () => {
          setBackgroundColor()
        })
      })

      return {
        toggleSwitch,
        switchCore,
        style
      }
    }
  }
</script>

<style lang="scss">
  @import 'common/variables.scss';
  $h: 22px;
  $h2: $h - 4px;
  $active-color: $color-success;
  $un-active-color: $color-border-base;
  .rv-switch {
    height: $h;
    width: $h * 2;
    border-radius: $h/2;
    border: none;
    background-color: $un-active-color;
    position: relative;
    outline: none;
    & > span {
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
    &.rv-switch-checked{
      background-color: $active-color;
      > span{
        left: calc(100% - #{$h2} - 2px);
      }
    }
    &.rv-switch-disabled{
      cursor: not-allowed;
      opacity: .6;
    }
  }

</style>