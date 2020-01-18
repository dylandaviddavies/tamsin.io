import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Products from '@/components/Products.vue';
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/products",
            component: Products
        },
    ]
});
