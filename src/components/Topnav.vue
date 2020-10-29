<template>
  <div class="top-nav" :class="{'background-color': headerBack}">
    <div class="logo" @click="toHome">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Raven"></use>
      </svg>
      <span>Raven UI</span>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenuVisible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
  import {inject, Ref, computed} from "vue";
  import router from "../router";

  export default {
    setup(){
      const menuVisible = inject<Ref<boolean>>('menuVisible')
      const toggleMenuVisible = () => {
        menuVisible ? menuVisible.value = !menuVisible?.value : ''
      }

      const toHome = () => {
        router.push('/')
      }

      const headerBack = computed(()=> {
        return router.currentRoute.value.fullPath.match(/\/doc/)
      })

      return {
        menuVisible, toggleMenuVisible, toHome, headerBack
      }
    }
  };
</script>
<style lang="scss" scoped>
  .top-nav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eaecef;
    background: linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(234,240,249,1) 0%, rgba(221,231,246,1) 100%);
    &.background-color {
      background: white;
    }
    > .logo {
      margin-right: auto;
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      svg {
        height: 32px;
        width: 32px;
        margin-right: 16px;
      }
       > span {
         color: #091841;
         font-size: 24px;
         font-weight: bold;
      }
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
    > .toggleAside {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
    }
  }
</style>