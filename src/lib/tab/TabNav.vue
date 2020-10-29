<template>
  <div
      class="rv-tabs__nav"
      :class="{
        'rv-tabs-type__card': type === 'card',
        'rv-tabs-type__border-card': type === 'border-card',
        'rv-tabs-type': type !== 'default'
      }"
      ref="tabNav">
    <div
        class="rv-tabs_item"
        :class="{
          'is-active': activeName === tab.name,
          'is-disabled': disabledName === tab.name
        }"
        v-for="tab in tabsProp"
        :key="tab.name"
        :id="tab.name"
        @click="clickTab(tab.name)"
    >
      {{ tab.label }}
    </div>
    <rv-tab-bar v-if="type === 'default'" :pane="tabNav"></rv-tab-bar>
  </div>
</template>

<script lang="ts">
  import {inject, ref} from 'vue'
  import RvTabBar from './TabBar.vue'

  export default {
    name: "RvTabNav",
    components:{
      RvTabBar
    },
    props: {
      tabsProp: Array,
      clickTab: {
        type: Function,
        default: (name)=>{}
      }
    },
    setup(props) {
      const activeName = inject('activeName')
      const type = inject('type')
      const disabledName = inject('disabledName')

      // 相当于 react 中的 useRef() 引用节点
      const tabNav = ref(null)

      return {
        activeName, tabNav, type, disabledName
      }
    },
  };
</script>

<style lang="scss">
  @import '../common/variables';

  $color-tab-border-grey: #e4e7ed;

  @mixin active-bar-after-border() {
    &::after{
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      z-index: 1;
    }
  }

  .rv-tabs__nav{
    &:not(.rv-tabs-type)::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: $color-tab-border-grey;
      width: 100%;
    }

    /* type: card */
    &.rv-tabs-type__card{
      border-bottom: 1px solid $color-tab-border-grey;
      > .rv-tabs_item{
        border: 1px solid $color-tab-border-grey;
        border-bottom: none;
        &:not(:last-child) {
          border-right: none;
        }
        &.is-active {
          position: relative;
          @include active-bar-after-border()
        }
      }
    }

    /* type: border-card */
    &.rv-tabs-type__border-card{
      color: #909399;
      > .rv-tabs_item {
        transition: background-color .3s cubic-bezier(.645,.045,.355,1);
        &.is-active {
          &:not(:first-child){
            border-left: 1px solid #dcdfe6;
          }
          border-right: 1px solid #dcdfe6;
          @include active-bar-after-border()
        }
      }
    }

    /* type: default */
    > .rv-tabs_item{
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      padding: 12px 20px;
      text-decoration: none;
      cursor: pointer;
      transition: color .3s cubic-bezier(.645,.045,.355,1);
      &:hover{
        color: $color-tab-bar-blue
      }

      &.is-active{
        color: $color-tab-bar-blue;
        background-color: #fff;
      }

      &.is-disabled, &.is-disabled:hover{
        color: rgba(0,0,0,.25);
        cursor: not-allowed;
      }
    }
  }

</style>
