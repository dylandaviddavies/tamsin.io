<template lang="pug">
    div
      div.tm-hero--bg.tm-hero(:style="{backgroundImage:`url('${ require('@/assets/guide-hero.png') }')`}")
        div.tm-hero__content.container
          h1.tm-hero__title.text-white.mb-3.pb-3 Hi, what can we help you with?
          div.tm-guide-hero__search
            i.material-icons-round.tm-guide-hero__search__icon(aria-hidden="true") search
            input.tm-guide-hero__search(placeholder="Search...")
        img(src="@/assets/hero-wave.svg" class='position-absolute zi-0 b-n1')
      div.tm-guide-container
        div.container.pb-5.mb-5
          div.row.tm-guide-nav-container
            div.col-lg-3.col-6.mb-4.px-2.px-md-3.px-lg-2.px-xl-3(v-for="card in cards" :key="card.href")
              a.tm-guide-card.h-100(:href='card.href')
                img.tm-guide-card__img(:src="card.img")
                h2.tm-guide-card__title {{card.title}}
                p.tm-guide-card__description {{card.description}}
        div.tm-zebra--odd
          img.tm-zebra__img(src="@/assets/white-wave.svg")
          div.tm-zebra__foal.tm-section.tm-section--padded--t-more
            div.container 
              div.row.align-items.flex-column-reverse.flex-md-row 
                div.col-lg-7.col-md-7.py-4.col-12.d-flex.align-items-center
                  div
                    h6.tm-giant-subtitle Developers
                    h4.tm-giant-title.font-weight-bold.mb-5 Introducing our new API
                    router-link.tm-btn.tm-btn--primary.tm-btn--round.tm-btn--animated--rise(to="/guide") Read more   
                div.col-lg-5.col-md-5.py-4.col-12.d-flex.align-items-center.justify-content-center           
                  img(id="apiPic" src='@/assets/tamsin-io-black-api.svg')  
          img.tm-zebra__img.rotate-180(src="@/assets/white-wave.svg")
          div.tm-zebra__foal.tm-section.tm-section--padded--t-more
            div.container 
              div.row
                div.col-12
                  h2.tm-section__title Recent activity
                  div.tm-recent-activity(v-for="ra in recentActivity" :key="ra.title")
                    a.tm-recent-activity__title(:href='ra.href') {{ra.title}}
                    a.tm-recent-activity__subtitle(:href='ra.href') {{ra.subtitle}}
                    div.tm-recent-activity__activity 
                      span.tm-recent-activity__date {{ra.date}}
                      span.tm-recent-activity__comments
                        i.tm-recent-activity__comments__icon.material-icons-round(aria-hidden="true") chat_bubble_outline
                        span {{ra.comments}}


</template>

<script>
export default {
  data: function() {
      return {
        recentActivity: [
          {
            href: "#",
            title: "January 2020 - Release Notes",
            subtitle: "Announcement",
            date: "Created 5 days ago",
            comments: "2"
          },
          {
            href: "#",
            title: "December 2019 - Release Notes",
            subtitle: "Announcement",
            date: "Created 1 month ago",
            comments: "3"
          },
          {
            href: "#",
            title: "Updated API Reference",
            subtitle: "Developers",
            date: "Created 1 month ago",
            comments: "0"
          }
        ],
        cards: [
          {
            href: '/guide/howto',
            img: require('@/assets/guide-howto.svg'),
            title: 'How To\'s',
            description: 'Tutorials on how to to just about anything.'
          },
          {
            href: '/guide/knowledge',
            img: require('@/assets/guide-knowledgebase.svg'),
            title: 'FAQs',
            description: 'Consult our FAQ guide.'
          },
          {
            href: '/guide/developers',
            img: require('@/assets/guide-developers.svg'),
            title: 'Developers',
            description: 'API reference, developer tools, and troubleshooting.'
          },
          {
            href: '/guide/support',
            img: require('@/assets/guide-support.svg'),
            title: 'Support',
            description: 'Having an issue? Let\'s get in touch.'
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
  $hero-pb: 28vw;
  .tm-hero {    
    padding-top: calc(#{$navbar-height} + 10vw);
    padding-bottom: calc(#{$hero-pb});
    @include overlay($guide-primary);
  }
  .tm-guide-container {
    transform: translateY(-#{$hero-pb * .7});
  }
  .tm-guide-hero__search {    
        display:inline-flex;
        align-items:center;
        margin: 0 auto;
        position:relative;
        &__icon {
            z-index: 1;
            position:absolute;
            left:18px;
            font-size:22px;
            top:0;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            color: #b1b1b1;
        }
        input {
            box-shadow: 0 2px 2px rgba(0,0,0,.5);
            max-width: 100%;
            width: 100%;
            @include media-breakpoint-up (sm){
              width: 350px;
            }
            padding:18px 32px 16px 48px;
            font-size:14px;
            font-size:16px;
            border-radius:3em;
            display: block;            
            overflow:hidden;
            border:none;
            font-weight: 500;
            @include hover-focus-active {
                outline:none;
            }
        }
  }
  .tm-recent-activity {
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
    &__title {
      display: inline-block;
      width:70%;
      color: #333333;
      font-weight:500;
    }
    &__subtitle {      
      display: inline-block;
      color: #333333;
      font-weight:300;
      width:70%;
      font-size:14px;
    }
    &__activity {      
      float:none;
      font-size: 12px;
      color: #333333;
      font-weight:300;
      @include media-breakpoint-up (sm){
          float:right;
      }
    }
    &__comments {      
      padding-left: 5px;
      &__icon {
        color: $primary;
        font-size: 15px;
        padding-right: 3px;
        vertical-align: middle;
      }
    }
  }
</style>