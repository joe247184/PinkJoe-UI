<template>
  <router-view />
</template>

<script lang="ts">

import {ref, provide} from "vue";
import router from "./router";

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible = ref<boolean>(width >= 500)
    provide('menuVisible', menuVisible)
    router.afterEach((to) => {
      // 是否从侧方导航menu中跳转
      const has = to.fullPath.match(/\/doc\/.+$/)
      if(has && width <= 500) {
        menuVisible.value = false
      }
    })
  }
}
</script>
