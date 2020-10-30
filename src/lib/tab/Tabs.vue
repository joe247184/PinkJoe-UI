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
      <component :is="current" :key="current.props.name"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { SetupContext, provide, reactive, computed, ref } from "vue";
import RvTabPane from "./TabPane.vue";
import RvTabNav from "./TabNav.vue";

const types = ['default', 'card', 'border-card']

const isDisabled = (props) => {
  return props.hasOwnProperty('disabled') && props.disabled !== false
}

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
    const disabledName = ref(null)

    tabs.forEach((val) => {
      // @ts-ignore
      if (val.type.name !== RvTabPane.name) {
        throw new Error("rv-tabs 子元素必须是 rv-tab-pane");
      }
    });

    const current = computed(()=>{
      return tabs.find(tab => tab.props.name === props.activeName)
    })

    const tabsProp = computed(()=>{
      return tabs.map((tab) => {
        if(isDisabled(tab.props)){
          disabledName.value = tab.props.name
        }
        return { ...tab.props };
      });
    })

    provide('activeName', reactive(computed(()=>props.activeName)))
    provide('type', reactive(computed(()=> props.type)))
    provide('disabledName', disabledName)

    const changeSelected = (name) => {
      if(name === disabledName.value) return
      context.emit('update:activeName', name)
    }

    return {
      tabsProp,
      changeSelected,
      current
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
