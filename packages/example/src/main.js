import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Divider from '@cm-ui/divider'
import Icon from '@cm-ui/icon'
import Image from "@cm-ui/image";
import Overlay from "@cm-ui/overlay"
import VueCompositionApi from '@vue/composition-api'
import Popup from '@cm-ui/popup'

Vue.use(VueCompositionApi)

Vue.config.productionTip = false
Vue.use(Icon).use(Divider).use(Overlay).use(Popup)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
