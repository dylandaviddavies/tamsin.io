import JQuery from 'jquery'
import Vue from 'vue/dist/vue.js'
import store from './store';
import i18n from './i18n';
import router from './router';
import components from './components';
require('@/stylesheets/index.scss');
Vue.config.productionTip = false;
new Vue({
    template:"<app/>",
    router,
    i18n,
    store,
    components
}).$mount("#app");
