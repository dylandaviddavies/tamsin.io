<template lang="pug">
    a.tm-link(:href='href'): slot
</template>

<script>
export default {
  props:{
    href: String
  },
  data: function() {
      return {
      };
  }
};
</script>