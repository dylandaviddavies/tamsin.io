<template lang="pug">
    nav.tm-nav
        router-link.tm-nav__logo(to='/') 
            img(src='@/assets/logo.png')
        ul.tm-nav__links
            li(v-for='item in items' :key='item.link')
                a(:href='item.link') {{item.label}}
</template>

<script>
import TmNavbar from "./Navbar.vue"
export default {
  components:{TmNavbar},
  data: function() {
      return {
          items: [
              {
                  link: '/',
                  label: 'Home'
              }
          ]
      };
  }
};
</script>