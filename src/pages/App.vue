<template lang="pug">
    div
        tm-navbar(:hero="isHero" :links="navLinks" :onShelfOpen="onShelfOpen")
        tm-shelf(:links="shelfLinks" :visible="isShelfVisible" :onClose="onShelfClose")
        div.d-flex.flex-column
            button#tm-back-to-top-btn.tm-floating-btn(aria-label="Back to Top")
            main
                transition
                    router-view
            tm-footer
</template>

<script>
import TmFooter from '{c}/Footer.vue';
import TmNavbar from "{c}/Navbar.vue"
import TmShelf from "{c}/Shelf.vue"
export default {
  components:{TmNavbar, TmShelf, TmFooter},
  data: function() {
        let links = [
                {
                    link: '/',
                    label: 'Home'
                },
                {
                    link: '/guide',
                    label: 'Guide'
                },
                {
                    link: '/',
                    label: 'Careers',
                }
            ];
        return {
            isHero: this.$route.path === '/',
            isShelfVisible: false,
            navLinks: links,
            shelfLinks: links,
        };
    },
    methods: {
        onShelfOpen() {
            this.isShelfVisible = true;
        },
        onShelfClose() {
            this.isShelfVisible = false;
        }
    }
};
</script>