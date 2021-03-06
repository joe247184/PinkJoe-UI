<!--
  <rv-button
    theme="primary | success | warning | danger | info | text",
    size="medium | small | mini"
    round
    @click=""
    @mouseover=""
  ></rv-button>
-->

<template>
  <button
      class="rv-button"
      :disabled="loading || disable"
      :class="[
          `rv-button-${theme}`,
          buttonSize ? 'rv-button-' + buttonSize : '',
          {
            'is-round': round,
            'is-disable': disable,
            'is-loading': loading
          }
          ]">
    <rv-icon v-if="loading" name="loading"></rv-icon>
    <rv-icon v-if="icon && !loading" :name="icon"></rv-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
  import {computed, PropType} from "vue";
  import RvIcon from "./Icon.vue";

  type RButtonTheme = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
  type RButtonSize = PropType<'medium' | 'small' | 'mini'>

  export default {
    name: "RvButton",
    components: {RvIcon},
    props:{
      theme: {
        type: String as RButtonTheme,
        default: 'default'
      },
      size: String as RButtonSize,
      round: Boolean,
      disable: Boolean,
      loading: Boolean,
      icon: String
    },
    setup(props: { size: string; }){
      const buttonSize = computed(()=>{
        return props.size
      })

      return { buttonSize }
    }
  }
</script>

<style lang="scss">
  @import 'common/variables.scss';

  $radius: 4px;

  @mixin rv-button-color-theme($selector, $theme-color, $theme-color-font, $color, $border-color, $background-color, $disable-color: #c0c4cc) {
    &.rv-button-#{$selector}{
      background-color: $theme-color;
      color: $theme-color-font;
      @if($selector != 'default') {
        border: $theme-color;
      }

      &:focus,&:hover{
        color: $color;
        border-color: $border-color;
        background-color: $background-color;
      }

      &.is-disable,&.is-disable:hover,&.is-disable:focus{
        color: $color;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
        @if($selector != 'default') {
          background-color: $disable-color;
          border-color: $disable-color;
        } @else {
          color: #c0c4cc;
        }
      }
    }
  }

  @mixin rv-button-size($size) {
    &.rv-button-#{$size}{
      @if($size == 'medium') {
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 4px;
      } @else if($size == 'small') {
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
      } @else if($size == 'mini') {
        padding: 7px 15px;
        font-size: 12px;
        border-radius: 3px;
      }
      &.is-round{
        border-radius: 20px;
      }
    }
  }

  .rv-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    outline: none;
    margin: 0;
    font-weight: 500;
    padding: 12px 20px;
    border-radius: $radius;
    &.is-round{
      border-radius: 20px;
    }

    &.is-loading{
      pointer-events: none;
      position: relative;
      &:before{
        pointer-events: none;
        content: "";
        position: absolute;
        left: -1px;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: inherit;
        background-color: hsla(0,0%,100%,.35);
      }
      > svg.rv-icon {
        animation: rotating 2s linear infinite;
        margin-right: 3px;
      }
    }

    &.is-disable,&.is-disable:hover,&.is-disable:focus{
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }

    /* theme */
    /*$selector, $theme-color, $theme-color-font, $color, $border-color, $background-color, $disable-color*/
    @include rv-button-color-theme(default, #fff, #606266, $color-primary, #c6e2ff, #ecf5ff);
    @include rv-button-color-theme(primary, $color-primary, #fff, #fff, #66b1ff, #66b1ff, #a0cfff);
    @include rv-button-color-theme(success, $color-success, #fff, #fff, #67c23a, #67c23a, #b3e19d);
    @include rv-button-color-theme(info, $color-info, #fff, #fff, #a6a9ad, #a6a9ad, #c8c9cc);
    @include rv-button-color-theme(warning, $color-warning, #fff, #fff, #ebb563, #ebb563, #f3d19e);
    @include rv-button-color-theme(danger, $color-danger, #fff, #fff, #f78989, #f78989, #fab6b6);

    /* size */
    @include rv-button-size(medium);
    @include rv-button-size(small);
    @include rv-button-size(mini);

    &.rv-button-text {
      border-color: transparent;
      color: $color-primary;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
      &.is-disable{
        color: $color-placeholder;
        border-color: transparent;
        &:hover,&:focus{
          color: $color-placeholder;
          cursor: not-allowed;
          background-image: none;
          background-color: #fff;
        }
      }
    }
  }
  
  @keyframes rotating {
    0%{
      transform: rotateZ(0deg);
    }
    100%{
      transform: rotateZ(360deg);
    }
  }
</style>
