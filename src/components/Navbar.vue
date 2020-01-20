<template lang="pug">
    nav.tm-nav(:class="{'tm-nav--hero': hero}")
        div.tm-nav__content.container
            router-link.tm-nav__logo(to='/') 
                img(src='@/assets/logo-white.svg')
            ul.tm-nav__links
                li(v-for='link in links' :key='link.link')
                    router-link(:to='link.link' class='tm-nav__link') {{link.label}}
            button.tm-nav__menu(type="button" aria-controls="tm-shelf" @click="onShelfOpen" aria-expanded="false")
                i.material-icons-round(aria-hidden="true") menu
</template>

<script>
export default {
    props: {
        links: Array,
        hero: Boolean,
        onShelfOpen: Function
    },
    data() {
        return {
        };
    }
};
</script>