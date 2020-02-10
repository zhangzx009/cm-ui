<template>
  <div
    class="cm-doc-container cm-doc-row"
    :class="{ 'cm-doc-container--with-simulator': hasSimulator }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'cm-doc-container',

  props: {
    hasSimulator: Boolean
  }
};
</script>

<style lang="less">
@import '../style/variable';

.cm-doc-container {
  box-sizing: border-box;
  padding-left: @cm-doc-nav-width;
  overflow: hidden;

  &--with-simulator {
    padding-right: @cm-doc-simulator-width + @cm-doc-padding;

    @media (max-width: 1300px) {
      padding-right: @cm-doc-simulator-small-width + @cm-doc-padding;
    }
  }
}
</style>
