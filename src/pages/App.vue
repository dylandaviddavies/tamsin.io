<template lang="pug">
    div
        tm-navbar(:hero="isHero" :links="navLinks" :onShelfOpen="onShelfOpen")
        tm-shelf(:links="shelfLinks" :visible="isShelfVisible" :onClose="onShelfClose")
        main
            transition(name="fade" mode="out-in")
                router-view
        button#tm-back-to-top-btn.tm-floating-btn
</template>

<script>
import TmNavbar from "{c}/Navbar.vue"
import TmShelf from "{c}/Shelf.vue"
export default {
  components:{TmNavbar, TmShelf},
  data: function() {
        return {
            isHero: this.$route.path === '/',
            isShelfVisible: false,
            navLinks: [
                {
                    link: '/',
                    label: 'Home'
                },
                {
                    link: '/guide',
                    label: 'Guide'
                },
                {
                    link: '/careers',
                    label: 'Careers',
                }
            ],
            shelfLinks: [
                {
                    link: '/',
                    label: 'Home'
                },
                {
                    link: '/guide',
                    label: 'Guide'
                },
                {
                    link: '/careers',
                    label: 'Careers',
                }
            ],
        };
    },
    methods: {
        onShelfOpen() {
            this.isShelfVisible = true;
        },
        onShelfClose() {
            this.isShelfVisible = false;
        }
    },
    watch: {
        '$route' () {
            this.isShelfVisible = false;
            this.isHero = this.$route.path === '/';
        }
    }
};
</script>