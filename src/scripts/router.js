import Vue from '{vue}';
import VueRouter from 'vue-router';
import Home from '{p}/Home.vue';
import Guide from '{p}/Guide.vue';
Vue.use(VueRouter);
export default new VueRouter({    
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
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
