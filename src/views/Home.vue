<template>
  <div class="home">
    <div class="top">
      <Topnav></Topnav>
      <div class="banner">
        <h1 class="title">Raven UI</h1>
        <h2 class="description">一个基于Vue3的 UI 框架</h2>
        <p class="actions">
          <router-link to="/doc/get-started" class="btn-start">开始体验</router-link>
          <a href="https://github.com" class="btn-github">GitHub</a>
        </p>
      </div>
    </div>

    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light-bulb"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
  import Topnav from "../components/Topnav.vue";
  export default {
    components: { Topnav },
  };
</script>
<style lang="scss" scoped>
  .home{
    .top {
      background: linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(234,240,249,1) 0%, rgba(221,231,246,1) 100%);
      .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > .title,.description {
          color: #091841;
        }
        >.title {
          font-size: 38px;
          margin: 20px auto;
          font-weight: bolder;
        }
        >.description {
          font-size: 28px;
          font-weight: 500;
        }
        > .actions{
          padding: 8px 0;
          margin-top: 50px;
          a {
            margin:0 8px;
            display: inline-block;
            font-size: 16px;
            line-height: 30px;
            height: auto;
            padding: 8px 24px;
            border-radius: 8px;
            &.btn-github {
              border: 1px solid #1e40c8;
              color: #1e40c8;
            }
            &.btn-start{
              background: #1e40c8;
              color: #ffffff;
            }
          }
        }
    }

    }

    .features {
      margin: 64px auto;
      @media (min-width: 800px) {
        width: 800px;
      }
      @media (min-width: 1200px) {
        width: 1200px;
      }
      >ul {
        display: flex;
        flex-wrap: wrap;
        >li {
          width: 400px;
          margin: 16px 0;
          display: grid;
          justify-content: start;
          align-content: space-between;
          grid-template-areas:
            "icon title"
            "icon text";
          grid-template-columns: 80px auto;
          grid-template-rows: 1fr auto;
          >svg {
            grid-area: icon;
            width: 64px;
            height: 64px;
          }
          >h3 {
            grid-area: title;
            font-size: 28px;
          }
          >p {
            grid-area: text
          }
        }
      }
    }
  }

</style>