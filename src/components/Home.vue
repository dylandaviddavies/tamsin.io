<template lang="pug">
    div
        h1 Welcome to tamsin.io!
        router-link(to='/products' v-slot="{ href, route, navigate, isActive }")
          tm-link(:href='href' :active='isActive' @click='navigate') Products
</template>

<script>
import TmNavbar from "./Navbar.vue"
import TmLink from "./Link.vue"
export default {
  components:{TmNavbar, TmLink},
  data: function() {
      return {
      };
  }
};
</script>