<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside :class="{'visible': !menuVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <div class="main-content">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
  import Topnav from "../components/Topnav.vue";
  import { inject, Ref } from "vue";
  export default {
    components: { Topnav },
    setup(){
      const menuVisible = inject<Ref<boolean>>('menuVisible') || {value: true}
      return {
        menuVisible
      }
    }
  };
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
      flex-shrink: 0;
    }
    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 200px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }
  .content {
    display: flex;
    > aside {
      flex-shrink: 0;
    }
    > main {
      padding: 16px;
      flex: 1;
      .main-content{
        max-width: 870px;
        margin: 0 auto;
      }
    }
  }
  aside {
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 65px;
    padding: 1rem 0 16px;
    height: 100%;
    transition: transform .3s;
    border-right: 1px solid #eaecef;
    background: #ffffff;
    z-index: 1;
    &.visible{
      transform: translateX(-200px);
    }
    > h2 {
      margin-bottom: 4px;
      padding-left: 1rem;
      font-weight: 700;
      margin-top: 1rem;
    }
    > ol {
      > li {
        > a {
          display: block;
          padding: 4px 0 4px 2rem;
          border-left: 4px solid transparent;
          &:hover, &:focus {
            outline: none;
            border-bottom: none;
            color: #4472c4;
          }
          &.router-link-active{
            border-left: 4px solid #4472c4;
            color: #4472c4;
          }
        }
      }
    }
  }
  main {
    overflow: auto;
    margin: 0;
  }
</style>