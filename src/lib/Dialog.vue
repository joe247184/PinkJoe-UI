<template>
  <teleport to="body">
    <rv-overlay v-show="visible" @click.self="clickOverlay">
      <div
          class="rv-dialog"
          :style="style"
      >
        <div class="rv-dialog-header">
        <span class="rv-dialog-title">
          <slot name="title">
            {{title}}
          </slot>
        </span>
          <rv-button theme="text" style="color: #909399">
            <rv-icon name="close" @click="close"></rv-icon>
          </rv-button>
        </div>

        <div class="rv-dialog-body">
          <slot></slot>
        </div>

        <div class="rv-dialog-footer">
          <slot name="footer">
          <span class="dialog-footer">
            <rv-button @click="cancel">取消</rv-button>
            <rv-button theme="primary" @click="handleOk">确定</rv-button>
          </span>
          </slot>
        </div>
      </div>
    </rv-overlay>
  </teleport>

</template>

<script lang="ts">
  import RvOverlay from "./Overlay.vue";
  import RvIcon from "./Icon.vue";
  import RvButton from './Button.vue'
  import { SetupContext, computed } from "vue";

  export default {
    name: "RvDialog",
    components: {RvIcon, RvOverlay, RvButton },
    props: {
      visible: Boolean,
      closeOnclickOverlay: {
        type: Boolean,
        default: true
      },
      width: String,
      title: {
        type: String,
        default: '提示'
      }
    },
    setup(props: any, context: SetupContext) {
      const style = computed(() => {
        let sty: any = {}
        if(props.width) {
          sty.width = props.width
        }
        return sty
      })

      const close = () => {
        context.emit('update:visible', false)
      }

      const cancel = () => {
        close()
      }

      const handleOk = (evt: Event) => {
        context.emit('ok', evt)
      }

      const clickOverlay = () => {
        props.closeOnclickOverlay && close()
      }

      return {style, close, cancel, handleOk, clickOverlay}
    }
  }
</script>

<style lang="scss">
  @import "common/variables";

  .rv-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
    > .rv-dialog-header {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      align-items: center;
      > .rv-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
    }

    > .rv-dialog-body {
      padding: 30px 20px;
      color: $color-regular-text;
      font-size: 14px;
      word-break: break-all;
    }

    > .rv-dialog-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      > .dialog-footer{
        text-align: right;
        > button {
          margin-left: 20px;
        }
      }
    }
  }
</style>