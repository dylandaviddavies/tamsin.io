<template lang="pug">
    div
        tm-navbar
        main
            transition(name="fade" mode="out-in")
                router-view
</template>

<script>
import TmNavbar from "./Navbar.vue"
export default {
  components:{TmNavbar},
  data: function() {
      return {
      };
  }
};
</script>