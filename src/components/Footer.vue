<template lang="pug">
    footer.tm-footer 
        img.position-absolute.t-n1.rotate-180(src="@/assets/grey-wave.svg" alt="" aria-hidden="true")
        img.tm-footer__logo(src='@/assets/logo-white.svg' alt="tamsin.io")
        div.tm-footer__search.my-4
            i.tm-footer__search__icon.material-icons-round(aria-hidden="true") search
            input(aria-label="Search" placeholder="Search...")
        div.d-flex.justify-content-center
            ul.d-inline-block.px-4
                li 
                    span.tm-footer__list-title Navigation
                    ul 
                        li 
                            router-link(to="/").tm-footer__link Home
                        li 
                            router-link(to="/guide").tm-footer__link Guide
                        li 
                            router-link(to="/careers").tm-footer__link Careers
            ul.d-inline-block.px-4
                li 
                    span.tm-footer__list-title Follow Us
                    ul.d-flex
                        li.mr-3
                            router-link(to="/" aria-label="Follow us on Instagram").tm-footer__link
                                i.fab.fa-instagram
                        li.mr-3
                            router-link(to="/" aria-label="Follow us on Twitter").tm-footer__link
                                i.fab.fa-twitter
                        li 
                            router-link(to="/" aria-label="Follow us on Facebook").tm-footer__link
                                i.fab.fa-facebook
        span.py-3 Dylan Davies ©2020
</template>

<script>
export default {
  data: function() {
      return {
      };
  }
};
</script>