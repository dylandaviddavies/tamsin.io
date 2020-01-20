<template lang="pug">
  div
    div.tm-hero(:style="{backgroundImage:`url('${ require('@/assets/hero.jpg') }')`}")
      div.tm-hero__content.container
        img.tm-hero__logo(src='@/assets/logo-white.svg')
        h2.tm-hero__subtext.text-white.text-shadow-stylish.my-5.text-center The world's largest music streaming platform.
        router-link(to='/products' class='tm-btn bg-white text-primary tm-btn--round') Learn more
      img(src="@/assets/hero_wave.svg" class='position-absolute b-n1')
    div.container.tm-section.mb-3.mb-lg-5
      div.row
        div.col-md-4.mb-5    
          div.tm-feature
            i.tm-feature__icon.fas.fa-headphones
            h3.tm-feature__title Superior Sound Quality          
            p.tm-feature__subtext We deliver the highest quality sounds straight through your headphones.
        div.col-md-4.mb-5       
          div.tm-feature  
            i.tm-feature__icon.far.fa-chart-bar
            h3.tm-feature__title Data Analytics
            p.tm-feature__subtext Gain access to analytics about your listening habits.
        div.col-md-4.mb-5 
          div.tm-feature
            i.tm-feature__icon.fas.fa-music
            h3.tm-feature__title Massive Library
            p.tm-feature__subtext Listen to your old favourites and discover new ones. 
    div.container.tm-section.mb-5
      div.row
        div.col-12
          h6.tm-section__subtitle.mb-2 Let's Get Started
          h2.tm-section__title.mb-4 Plans

      div.row
        div.col-lg-4.tm-plan-card.mb-5
          div.tm-plan-card__content
            h3.tm-plan-card__title Free
            div.tm-plan-card__price
              div.tm-plan-card__price__amount $0 
              div.tm-plan-card__price__rate per month
            p.tm-plan-card__p For beginners.
            ul.tm-plan-card__list
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title High quality music.
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title Unrestricted access to our full library of music.
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title Unlimited listening time.
          button.bg-primary.text-white.tm-plan-card__btn Get started
            
        div.col-lg-4.tm-plan-card.mb-5
          div.tm-plan-card__content
            h3.tm-plan-card__title Pro
            div.tm-plan-card__price 
              div.tm-plan-card__price__amount $7.99 
              div.tm-plan-card__price__rate per month
            p.tm-plan-card__p For the savvy music fan.
            ul.tm-plan-card__list
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title No advertisements, uninterrupted listening time.
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title Listening insights.
          button.bg-primary.text-white.tm-plan-card__btn Get started

        div.col-lg-4.tm-plan-card.mb-5
          div.tm-plan-card__content
            h3.tm-plan-card__title Aficionado
            div.tm-plan-card__price 
              div.tm-plan-card__price__amount $13.99 
              div.tm-plan-card__price__rate per month
            p.tm-plan-card__p For the most dedicated music nerds. 
            ul.tm-plan-card__list
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title Discounts on merch and tickets.
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title Access to analytics tools and dashboards. 
              li.tm-plan-card__list__item
                i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                span.tm-plan-card__list__item__title Access to advanced APIs for developers.
          button.bg-primary.text-white.tm-plan-card__btn Get started
            
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