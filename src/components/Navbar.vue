<template lang="pug">
    nav.tm-nav(:class="{'tm-nav--hero': isHero}")
        div.tm-nav__content.container
            router-link.tm-nav__logo(to='/') 
                img(src='@/assets/logo.png' v-if="!isHero")
                img(src='@/assets/logo-white.png' v-if="isHero")
            ul.tm-nav__links
                li(v-for='item in items' :key='item.link')
                    router-link(:to='item.link' class='tm-nav__link') {{item.label}}
            button.tm-nav__menu(type="button" aria-controls="tm-sidebar" aria-expanded="false")
                i.material-icons-round(aria-hidden="true") menu
</template>

<script>
import TmNavbar from "./Navbar.vue"
export default {
    components:{TmNavbar},
    data() {
        return {
            isHero: this.$route.path === '/',
            items: [
                {
                    link: '/',
                    label: 'Home'
                },
                {
                    link: '/products',
                    label: 'Products'
                },
                {
                    link: '/careers',
                    label: 'Careers',
                }
            ],
        };
    },
    watch: {
        '$route' () {
            this.isHero = this.$route.path === '/';
        }
    }
};
</script>