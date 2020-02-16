import $ from 'jquery'
import Vue from '{vue}'
import store from './store';
import i18n from './i18n';
import router from './router';
import components from './components';
import App from '{p}/App.vue';

// Styles
require('@/stylesheets/index.scss');

new Vue({
    render: h => h(App),
    router,
    i18n,
    store,
    components
}).$mount("#app");

$(document).on("click", "#tm-back-to-top-btn", () => {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
});