<template>
  <div class="cm-doc">
    <cm-doc-header
      :lang="lang"
      :github="github"
      :versions="versions"
      :config="config.header"
      :search-config="searchConfig"
      @switch-version="$emit('switch-version', $event)"
    />
    <cm-doc-nav :base="base" :nav-config="config.nav" />
    <cm-doc-container :has-simulator="!!(simulator || simulators.length)">
      <cm-doc-content>
        <slot />
      </cm-doc-content>
    </cm-doc-container>
    <cm-doc-simulator v-if="simulator" :src="simulator" />
    <cm-doc-simulator
      v-for="(url, index) in simulators"
      v-show="index === currentSimulator"
      :src="url"
      :key="url"
    />
  </div>
</template>

<script>
export default {
  name: 'cm-doc',

  props: {
    lang: String,
    github: String,
    versions: Array,
    searchConfig: Object,
    currentSimulator: Number,
    simulator: String,
    config: {
      type: Object,
      required: true
    },
    simulators: {
      type: Array,
      default: () => []
    },
    base: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      nav: [],
      currentPath: null,
      leftNav: null,
      rightNav: null
    };
  },

  watch: {
    // eslint-disable-next-line
    '$route.path'() {
      this.setNav();
      this.updateNav();
    }
  },

  created() {
    this.setNav();
    this.updateNav();
    this.keyboardHandler();
  },

  methods: {
    setNav() {
      const { nav } = this.config;
      for (let i = 0; i < nav.length; i++) {
        const navItem = nav[i];
        if (!navItem.groups) {
          this.nav.push(nav[i]);
        } else {
          for (let j = 0; j < navItem.groups.length; j++) {
            this.nav = this.nav.concat(navItem.groups[j].list);
          }
        }
      }
    },

    updateNav() {
      let currentIndex;
      this.currentPath = '/' + this.$route.path.split('/').pop();
      for (let i = 0, len = this.nav.length; i < len; i++) {
        if (this.nav[i].path === this.currentPath) {
          currentIndex = i;
          break;
        }
      }
      this.leftNav = this.nav[currentIndex - 1];
      this.rightNav = this.nav[currentIndex + 1];
    },

    handleNavClick(direction) {
      const nav = direction === 'prev' ? this.leftNav : this.rightNav;
      if (nav.path) {
        this.$router.push(this.base + nav.path);
      } else if (nav.link) {
        window.location.href = nav.link;
      }
    },

    keyboardHandler() {
      window.addEventListener('keyup', event => {
        switch (event.keyCode) {
          case 37: // left
            this.handleNavClick('prev');
            break;
          case 39: // right
            this.handleNavClick('next');
            break;
        }
      });
    }
  }
};
</script>

<style lang="less">
@import './style/index';
</style>
