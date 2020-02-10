<template>
  <section class="cm-doc-demo-block">
    <h2 class="cm-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'cm-doc-demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="less">
@import '../style/variable';

.cm-doc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: @cm-doc-text-light-blue;
    font-weight: normal;
    font-size: 14px;
  }

  &:first-of-type {
    .cm-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
