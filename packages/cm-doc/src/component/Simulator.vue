<template>
  <div :class="['cm-doc-simulator', { 'cm-doc-simulator-fixed': isFixed }]">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'cm-doc-simulator',

  props: {
    src: String
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight
    };
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px'
      };
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  }
};
</script>

<style lang="less">
@import '../style/variable';

.cm-doc-simulator {
  position: absolute;
  top: @cm-doc-padding + @cm-doc-header-top-height;
  right: @cm-doc-padding;
  z-index: 1;
  box-sizing: border-box;
  width: @cm-doc-simulator-width;
  min-width: @cm-doc-simulator-width;
  overflow: hidden;
  background: #fafafa;
  border-radius: 6px;
  box-shadow: #ebedf0 0 4px 12px;

  @media (max-width: 1300px) {
    width: @cm-doc-simulator-small-width;
    min-width: @cm-doc-simulator-small-width;
  }

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: @cm-doc-row-max-width) {
    right: 50%;
    margin-right: calc(-@cm-doc-row-max-width / 2 + 40px);
  }

  &-fixed {
    position: fixed;
    top: @cm-doc-padding;
  }

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
