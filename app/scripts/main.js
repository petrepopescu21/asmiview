import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui'; // Mandatory
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // Optional

Vue.config.productionTip = false;
Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});