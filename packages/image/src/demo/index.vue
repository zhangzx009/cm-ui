<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <cm-row>
        <cm-image
          width="100"
          height="100"
          :src="image"
        />
      </cm-row>
    </demo-block>

    <demo-block :title="$t('fitMode')">
      <cm-row gutter="20">
        <cm-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <cm-image
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </cm-col>
      </cm-row>
    </demo-block>

    <demo-block :title="$t('round')">
      <cm-row gutter="20">
        <cm-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <cm-image
            round
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </cm-col>
      </cm-row>
    </demo-block>

    <demo-block :title="$t('loading')">
      <cm-row gutter="20">
        <cm-col span="8">
          <cm-image
            width="100%"
            height="27vw"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </cm-col>

        <cm-col span="8">
          <cm-image
            width="100%"
            height="27vw"
          >
            <template #loading>
              <cm-loading
                type="spinner"
                size="20"
              />
            </template>
          </cm-image>
          <div class="text">{{ $t('customTip') }}</div>
        </cm-col>
      </cm-row>
    </demo-block>

    <demo-block :title="$t('error')">
      <cm-row gutter="20">
        <cm-col span="8">
          <cm-image
            width="100%"
            height="27vw"
            src="x"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </cm-col>

        <cm-col span="8">
          <cm-image
            width="100%"
            height="27vw"
            src="x"
          >
            <template #error>{{ $t('loadFail') }}</template>
          </cm-image>
          <div class="text">{{ $t('customTip') }}</div>
        </cm-col>
      </cm-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fitMode: '填充模式',
      round: '圆形图片',
      loading: '加载中提示',
      error: '加载失败提示',
      defaultTip: '默认提示',
      customTip: '自定义提示',
      loadFail: '加载失败'
    },
    'en-US': {
      fitMode: 'Fit Mode',
      round: 'Round',
      loading: 'Loading',
      error: 'Error',
      defaultTip: 'Default Tip',
      customTip: 'Custom Tip',
      loadFail: 'Load failed'
    }
  },

  data() {
    return {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
    };
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .cm-row {
    padding: 0 @padding-md;
  }

  .cm-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-darker;
    font-size: 14px;
    text-align: center;
  }
}
</style>
