<template lang="pug">
  div
    div.tm-hero(:style="{backgroundImage:`url('${ require('@/assets/hero.jpg') }')`}")
      div.tm-hero__content.container
        img.tm-hero__logo(src='@/assets/logo-white.svg' data-aos="zoom-in-up")
        h2.tm-hero__subtext.text-white.text-shadow-stylish.my-5.text-center(data-aos="zoom-in-up" data-aos-delay="300") The world's largest music streaming platform.
        div(data-aos="zoom-in-up" data-aos-delay="600")
          router-link(to='/guide' class='tm-btn bg-white tm-btn--animated--rise text-primary tm-btn--round') Learn more
      img.tm-hero__wave(src="@/assets/hero-wave.svg")
    div.tm-zebra
      div.tm-zebra__foal.tm-section.tm-section--padded--b-more
        div.container
          div.row
            div.col-md-4.mb-5.mb-md-0    
              div.tm-feature(data-aos="zoom-in-up" data-aos-delay="300")
                i.tm-feature__icon.fas.fa-headphones
                h3.tm-feature__title Superior Sound Quality          
                p.tm-feature__subtext We deliver the highest quality sounds straight through your headphones.
            div.col-md-4.mb-5.mb-md-0         
              div.tm-feature(data-aos="zoom-in-up" data-aos-delay="600")
                i.tm-feature__icon.far.fa-chart-bar
                h3.tm-feature__title Data Analytics
                p.tm-feature__subtext Gain access to analytics about your listening habits.
            div.col-md-4   
              div.tm-feature(data-aos="zoom-in-up" data-aos-delay="900")
                i.tm-feature__icon.fas.fa-music
                h3.tm-feature__title Massive Library
                p.tm-feature__subtext Listen to your old favourites and discover new ones. 
      img.tm-zebra__img(src="@/assets/wave-1.svg")
      div.tm-zebra__foal.tm-section.tm-section--padded--t-more
        div.container 
          div.row.align-items
            div.col-lg-6.col-md-7.py-4.col-12.d-flex.align-items-center
              div
                h4.tm-giant-title.font-weight-bold.mb-5(data-aos="fade-right") The high quality music you deserve  
                div(data-aos="fade-right")
                  router-link.tm-btn.tm-btn--primary.tm-btn--round.tm-btn--animated--rise(to="/guide") Download          
            div.col-lg-6.col-md-5.py-4.col-12              
              img.w-100(src='@/assets/hq-companion.png' data-aos="fade-left")
      img.tm-zebra__img.rotate-180(src="@/assets/white-wave.svg")
      div.tm-zebra__foal.tm-section.tm-section--padded--b-more
        div.container 
          div.row.align-items    
            div.col-lg-6.col-md-5.py-4.col-12              
              img.w-100(src='@/assets/guide-companion.png' data-aos="fade-right")
            div.col-lg-6.col-md-7.py-4.col-12.d-flex.align-items-center
              div
                h6.tm-giant-subtitle.text-right(data-aos="fade-left") Guide
                h4.tm-giant-title.font-weight-bold.mb-5.text-right(data-aos="fade-left") We'll help you along the way 
                div(data-aos="fade-left")
                  router-link.tm-btn.float-right.tm-btn--primary.tm-btn--round.tm-btn--animated--rise(to="/guide") View our guide    
      img.tm-zebra__img(src="@/assets/white-wave.svg")
      div.tm-zebra__foal.tm-section.tm-section--padded--b-more
        div.container 
          div.row.align-items.flex-column-reverse.flex-md-row 
            div.col-lg-7.col-md-7.py-4.col-12.d-flex.align-items-center
              div
                h6.tm-giant-subtitle(data-aos="fade-right") Developers
                h4.tm-giant-title.font-weight-bold.mb-5(data-aos="fade-right") A powerful new API at your fingertips.
                div(data-aos="fade-right")
                  router-link.tm-btn.tm-btn--primary.tm-btn--round.tm-btn--animated--rise(to="/guide") Read more   
            div.col-lg-5.col-md-5.py-4.col-12.d-flex.align-items-center.justify-content-center           
              img(id="apiPic" src='@/assets/tamsin-io-black-api.svg' data-aos="fade-left")   
      img.tm-zebra__img.rotate-180(src="@/assets/white-wave.svg")     
      div.tm-zebra__foal.tm-section.tm-section--padded--t-more
        div.container
          div.row
            div.col-12(data-aos="zoom-in-down")
              h6.tm-section__subtitle.mb-2 Let's Get Started
              h2.tm-section__title.mb-4 Plans
          div.row
            tm-plan-card.col-lg-4.mb-5(v-for="(plan, index) in plans" :key="plan.title" :data-aos="plan.aos" :data-aos-delay="plan.aosDelay" :title="plan.title" :price="plan.price" :description="plan.description" :points="plan.points")        
</template>

<script>
import TmNavbar from "{c}/Navbar.vue";
import TmLink from "{c}/Link.vue";
import TmPlanCard from "{c}/PlanCard.vue"
export default {
  components:{TmNavbar, TmLink, TmPlanCard},
  data: function() {
      return {
        plans: [
          {
            title: "Free",
            price: "$0",
            description: "For beginners.",
            aos: "zoom-in-up",
            aosDelay: "300",
            points: [
              'High quality music.',
              'Unrestricted access to our full library of music.',
              'Unlimited listening time.'
            ]
          },
          {
            title: "Pro",
            price: "$7.99",
            description: "For the savvy music fan.",
            aos: "zoom-in-up",
            aosDelay: "600",
            points: [
              'No advertisements, uninterrupted listening time.',
              'Listening insights.'
            ]
          },
          {
            title: "Aficionado",
            price: "$13.99",
            description: "For the most dedicated music nerds.",
            aos: "zoom-in-up",
            aosDelay: "900",
            points: [
              'Discounts on merch and tickets.',
              'Access to analytics tools and dashboards.',
              "Access to advanced APIs for developers."
            ]
          }
        ]
      };
  }
};
</script>

<style lang="scss" scoped>
  @import '@/stylesheets/abstracts/_variables.scss';
  @import '@/stylesheets/abstracts/_mixins.scss';
  @import '@/stylesheets/vendors/_all.scss';

  .tm-guide-hq-companion {
    right: 0;
    position:absolute;
    height:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    &__img {
      max-height:100%;
      max-width:100%;
      display:block;
    }
  }
  .tm-hero {    
    padding-top: calc(#{$navbar-height} + 10vw);
    padding-bottom: 20vw;
    @include media-breakpoint-up(xl){      
      padding-top: calc(#{$navbar-height} + 6vw);
      padding-bottom: 18vw;
      margin-bottom: -3vw;
    }
    &__logo {
        height:10vw;
        @include media-breakpoint-up(lg){
            height:6vw;
        }
        @include media-breakpoint-up(xl){
            height:5vw;
        }
    }
  }
</style>