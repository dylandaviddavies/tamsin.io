import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Home from '{p}/Home.vue';
import Guide from '{p}/Guide.vue';
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/guide",
            component: Guide
        },
    ]
});
