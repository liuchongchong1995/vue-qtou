import Vue from 'vue';
import VueDOMPurifyHTML from 'vue-dompurify-html'
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/common.scss';
import '@/plugins/element.js';
import '@/components/Card';
import '@/components/global.js';
import '@/assets/scripts/permission';
import '@/assets/icon/index.css';  
import goBack from '@/assets/scripts/utils/goBack.js'; 

Vue.prototype.$goBack = goBack;
Vue.use(VueDOMPurifyHTML);  
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
