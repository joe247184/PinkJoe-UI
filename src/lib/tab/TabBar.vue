<!-- 蓝色滚动条 -->
<template>
  <div class="rv-tab-bar" :style="style"></div>
</template>

<script lang="ts">
  import { computed, inject } from "vue"

  interface ActiveTabName {
    activeName: string
  }

  const tabFilter = (tabs) => {
    return tabs.reduce((prev, cur) => {
      return Array.from(cur.classList).includes('rv-tabs_item') ? [...prev, cur] : prev
    },[])
  }

  export default {
    name: "TabBar",
    props:{
      pane: HTMLElement
    },
    setup(props, context){
      const tabPane = computed(()=> props.pane)
      const activeName = inject<ActiveTabName>('activeName')

      const style = computed(()=>{
        const items: Array<HTMLElement> | undefined = tabPane.value && Array.from(tabPane.value.children)
        let style = {} as CSSStyleDeclaration

        if(items) {
          const tabs = tabFilter(items)

          let offset = 0
          let tabSize = 0
          let flag = true

          tabs.map(tab => {
            if(tab.id === activeName.value) {
              flag = false
              tabSize = tab.clientWidth
            }

            if(flag){
              offset += tab.clientWidth
              // tab之间的margin-right
              // offset += 32
            }

            const transform = `translateX(${offset}px)`
            style.width = tabSize + 'px'
            style.transform = transform;
            style.msTransform = transform;
            style.webkitTransform = transform;
          })
        }

        return style
      })

      return {
        style
      }
    }
  }
</script>

<style lang="scss">
  @import '../common/variables';

  .rv-tab-bar{
    background-color: $color-tab-bar-blue;
    width: 50px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    transition: all .3s;
  }
</style>