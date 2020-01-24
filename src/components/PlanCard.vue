<template lang="pug">   
    div.tm-plan-card
        div.tm-plan-card__content
            h3.tm-plan-card__title {{title}}
            div.tm-plan-card__price
                div.tm-plan-card__price__price {{price}} 
                div.tm-plan-card__price__rate per month
            p.tm-plan-card__p {{description}}
            ul.tm-plan-card__list
                li.tm-plan-card__list__item(v-for="point in points")
                    i.tm-plan-card__list__item__icon.material-icons-round(aria-hidden='true') done
                    span.tm-plan-card__list__item__title {{point}}
        button.tm-plan-card__btn Get started
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        points: Array,
        price: String
    },
    data() {
        return {
        };
    }
};
</script>