<template lang="pug">
    aside#tm-shelf.tm-shelf(:class="{'tm-shelf--visible': isVisible}")   
        div.tm-shelf__drawer
            div.tm-shelf__drawer__header
                router-link.tm-shelf__drawer__logo(to='/')
                    img.tm-shelf__drawer__img(src='@/assets/logo-white.svg' alt="tamsin.io")
                button.tm-shelf__close.material-icons-round(@click="close" aria-controls="tm-shelf" :aria-expanded="isVisible") close
            div.tm-shelf__drawer__body
                ul.tm-shelf__drawer__links
                    li(v-for='link in links' :key='link.label')
                        router-link.tm-shelf__drawer__link(:to='link.link' v-on:click.native="close") {{link.label}}
</template>

<script>
export default {
    props: {
        links: Array,
        visible: Boolean,
        onClose: Function
    },
    data() {
        return {
            isVisible: this.visible
        };
    },
    watch: {
        visible() {
            this.isVisible= this.visible;
        }
    },
    methods: {
        close(){
            this.isVisible=false;
            if (this.onClose)
                this.onClose();
        }
    }
};
</script>