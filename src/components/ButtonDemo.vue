<template>
  <h1>Button 按钮</h1>
  <p class="demo-block">常用的操作按钮。</p>

  <section class="demo-block">
    <h2>基础用法</h2>
    <p>基础的按钮用法。</p>

    <div class="source">
      <!--  theme="primary | success | warning | danger | info | text"  -->
      <div class="rv-row">
        <rv-button>默认按钮</rv-button>
        <rv-button theme="primary">主要按钮</rv-button>
        <rv-button theme="success">成功按钮</rv-button>
        <rv-button theme="warning">警告按钮</rv-button>
        <rv-button theme="danger">危险按钮</rv-button>
        <rv-button theme="info">信息按钮</rv-button>
      </div>

      <div class="rv-row">
        <rv-button round>默认按钮</rv-button>
        <rv-button theme="primary" round>主要按钮</rv-button>
        <rv-button theme="success" round>成功按钮</rv-button>
        <rv-button theme="warning" round>警告按钮</rv-button>
        <rv-button theme="danger" round>危险按钮</rv-button>
        <rv-button theme="info" round>信息按钮</rv-button>
      </div>
    </div>

    <div class="meta">
      <div class="description">
        <div><p>使用<code>theme</code>、<code>round</code>属性来定义 Button 的样式。</p></div>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>不同尺寸</h2>
    <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>

    <div class="source">
      <!--  size="medium | small | mini"  -->
      <div class="rv-row">
        <rv-button>默认按钮</rv-button>
        <rv-button size="medium">中等按钮</rv-button>
        <rv-button size="small">小型按钮</rv-button>
        <rv-button size="mini">超小按钮</rv-button>
      </div>

      <div class="rv-row">
        <rv-button round>默认按钮</rv-button>
        <rv-button size="medium" round>中等按钮</rv-button>
        <rv-button size="small" round>小型按钮</rv-button>
        <rv-button size="mini" round>超小按钮</rv-button>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>禁用状态</h2>
    <p>按钮不可用状态。</p>

    <div class="source">
      <div class="rv-row">
        <rv-button disable>默认按钮</rv-button>
        <rv-button theme="primary" disable>主要按钮</rv-button>
        <rv-button theme="success" disable>成功按钮</rv-button>
        <rv-button theme="warning" disable>警告按钮</rv-button>
        <rv-button theme="danger" disable>危险按钮</rv-button>
        <rv-button theme="info" disable>信息按钮</rv-button>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>文字按钮</h2>
    <p>没有边框和背景色的按钮。</p>

    <div class="source">
      <div class="rv-row">
        <rv-button theme="text">文字按钮</rv-button>
        <rv-button theme="text" disable>文字按钮</rv-button>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>加载中</h2>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>

    <div class="source">
      <div class="rv-row">
        <rv-button theme="primary" :loading="true">加载中</rv-button>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>图标按钮</h2>
    <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>

    <div class="source">
      <div class="rv-row">
        <rv-button theme="primary" icon="pic"></rv-button>
        <rv-button theme="primary" icon="seleted"></rv-button>
        <rv-button theme="primary" icon="share"></rv-button>
        <rv-button theme="primary" icon="search">搜索</rv-button>
        <rv-button theme="primary">
          保存
          <rv-icon name="save-fill"></rv-icon>
        </rv-button>
      </div>
    </div>
  </section>

  <section class="demo-block">
    <h2>事件绑定</h2>
    <p>可以对按钮绑定 @click 事件</p>

    <div class="source">
      <div class="rv-row">
        <rv-button theme="primary" @click="greeting">greeting</rv-button>
      </div>
    </div>
  </section>

</template>

<script>
  import RvButton from '../lib/Button.vue'
  import RvIcon from "../lib/Icon.vue";

  export default {
    name: "ButtonDemo",
    components:{
      RvIcon,
      RvButton
    },
    setup(){
      const greeting = () => {
        alert('hi!!')
      }

      return {greeting}
    }
  }
</script>

<style lang="scss" scoped>
  section.demo-block .source .rv-row button{
    margin-right: 15px;
  }
</style>