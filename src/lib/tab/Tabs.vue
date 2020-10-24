<template>
  <div
      class="rv-tabs"
      :class="{
        'rv-tabs-type__card-border': type === 'border-card'
      }"
  >
    <div class="rv-tab__header-wrapper">
      <rv-tab-nav :tabsProp="tabsProp" :clickTab="changeSelected"></rv-tab-nav>
    </div>

    <div class="rv-tab__content">
      <template v-for="tab in tabs">
        <component :is="tab" v-if="tab.props.name === activeName"></component>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { SetupContext, provide, reactive, computed } from "vue";
import RvTabPane from "./TabPane.vue";
import RvTabNav from "./TabNav.vue";

const types = ['default', 'card', 'border-card']

export default {
  name: "RvTabs",
  components: { RvTabNav },
  props:{
    activeName: String,
    type: {
      type: String,
      default:'default'
    }
  },
  setup(props, context: SetupContext) {
    if(!types.includes(props.type)){
      throw new Error(`type 类型应该是[\'default\', \'card\', \'border-card\']其中一种。而不是“${props.type}”`)
    }

    const tabs = context.slots.default();

    tabs.forEach((val) => {
      if (val.type !== RvTabPane) {
        throw new Error("rv-tabs 子元素必须是 rv-tab-pane");
      }
    });

    const tabsProp = tabs.map((tab) => {
      return { ...tab.props };
    });

    provide('activeName', reactive(computed(()=>props.activeName)))
    provide('type', reactive(computed(()=> props.type)))

    const changeSelected = (name) => {
      context.emit('update:activeName', name)
    }

    return {
      tabs,
      tabsProp,
      changeSelected
    };
  }
};
</script>

<style lang="scss">
  .rv-tabs{
    width: 100%;
    background-color: #ffffff;
    &.rv-tabs-type__card-border{
      border: 1px solid #dcdfe6;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
      > .rv-tab__content{
        padding: 0 15px 15px;
      }
      > .rv-tab__header-wrapper {
        background-color: #f5f7fa;
        border-bottom: 1px solid #e4e7ed;
      }
    }

    > .rv-tab__header-wrapper{
      position: relative;
      margin-bottom: 15px;
    }

    > .rv-tab__content{
      padding: 0 0 15px 0;
    }
  }

</style>
