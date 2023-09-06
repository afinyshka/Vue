<template>
    <section class="articles m-b-200">
        <img src="@/assets/image/Photo-blog.png" alt="interior photo" class="articles__img">
        <div class="articles__wrap">
            <h2 class="heading m-b-12">Articles & News</h2>
            <div class="breadcrump">
                <router-link to="/" class="breadcrump__item">Home</router-link>
                <router-link to="/blog" class="breadcrump__item">Blog</router-link>
            </div>
        </div>
    </section>
    <section class="latest center m-b-150">
        <h2 class="heading heading_left 
         m-b-27">Latest Post</h2>
        <div class="latest__wrap">
            <img src="@/assets/image/Photo-latest.png" alt="interior" class="latest__img">
            <div class="latest__text-box">
                <h2 class="news-card__subheading">Low Cost Latest Invented Interior Designing Ideas</h2>
                <p class="subtext m-b-30">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpis
                    dignissim
                    maximus.posuere in.Contrary to popular belief.</p>
                <p class="subtext m-b-50">Lorem Ipsum is not simply random text. It has roots in a
                    piece of
                    classica.</p>
                <p class="date-text">26 December, 2022</p>
                <router-link to="/blog-details" class="news-card__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg></router-link>
            </div>
        </div>
    </section>
    <section class="news center m-b-50">
        <h2 class="heading heading_left m-b-30">Articles & News</h2>
        <div class="news__cards">
            <div v-for="newsCard in newsCards" :key="newsCard.id" class="news-card">
                <img :src="require(`@/assets/${newsCard.img}`)" alt="interior" class="news-card__img">
                <h3 class="news-card__subheading"> {{ newsCard.header }} </h3>
                <p class="date-text">{{ newsCard.date }}</p>
                <router-link to="/blog-details" class="news-card__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle class="news-card__circle" cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg></router-link>
            </div>
        </div>
    </section>
    <paginationComponent class="center m-b-200" />
</template>

<script>
import paginationComponent from '../components/paginationComponent.vue'

export default {
    components: {
        paginationComponent,
    },
    data() {
        return {
            newsCards: [
                {
                    img: 'image/Photo_articles_1.png',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022',
                },
                {
                    img: 'image/Photo_articles_2.png',
                    header: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December, 2022',
                },
                {
                    img: 'image/Photo_articles_3.png',
                    header: 'Best For Any Office & Business Interior Solution',
                    date: '25 December, 2022',
                },
                {
                    img: 'image/Photo_articles_4.png',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022',
                },
                {
                    img: 'image/Photo_articles_5.png',
                    header: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December, 2022',
                },
                {
                    img: 'image/Photo_articles_6.png',
                    header: 'Best For Any Office & Business Interior Solution',
                    date: '25 December, 2022',
                },
            ]
        }
    },
}

</script>

<style scoped lang="sass">
.articles
    position: relative
    &__img
        width: 100vw
    &__wrap
        // width: 50.3rem
        // height: 17.8rem
        border-radius: 3.7rem 3.7rem 0rem 0rem
        // box-sizing: border-box
        padding: 4.1rem 7.8rem
        text-align: center
        background: #FFF
        position: absolute
        bottom: 0
        left: 50%
        transform: translateX(-50%)

.breadcrump
    &__item
        color: #4D5053
        font-family: Jost, sans-serif
        font-size: 2.2rem
        font-style: normal
        font-weight: 400
        line-height: 3.3rem
        letter-spacing: 0.022rem
        text-decoration: none
        &:not(:last-child)::after
            padding-left: 8px
            padding-right: 8px
            content: '/'
        &_small
            font-size: 1.6rem
            line-height: 2.4rem
            letter-spacing: 0.016rem
            &:last-child
                padding-right: 7.8rem

.latest
    &__img
        border-radius: 4rem
    &__wrap
        position: relative
        display: flex
        gap: 6.5rem
        border-radius: 6.2rem
        border: 1px solid #E7E7E7
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)
        padding: 2.2rem
        box-sizing: border-box
    &__text-box
        padding-top: 5rem

.news
    &__cards
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        gap: 3rem 2.4rem

.news-card
    position: relative
    width: 38.2rem
    height: 52.1rem
    box-sizing: border-box
    padding: 2.1rem
    border-radius: 6.2rem
    border: 1px solid #E7E7E7
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)
    &:nth-child(2)
        background: #F4F0EC
    &:nth-child(2) svg circle
        fill: #fff
    &__img
        margin-bottom: 0.6rem
        border-top-left-radius: 4.1rem
        border-top-right-radius: 4.1rem
    &__subheading
        width: 30rem
        color: #292F36
        font-family: DM Serif Display, sans-serif
        font-size: 2.5rem
        font-style: normal
        font-weight: 400
        line-height: 3.125rem
        letter-spacing: 0.05rem
        margin-bottom: 3rem
    &__btn
        width: 5.2rem
        height: 5.2rem
        flex-shrink: 0
        border-radius: 50%
        border: none
        position: absolute
        right: 2.1rem
        bottom: 3.8rem
        transition: transform 0.3s ease-in-out
        &:hover
            transform: scale(1.1)

            

.pagination
    display: flex
    justify-content: center
    gap: 2rem
    &__prev-btn
        transform: scale(-1,1)
        width: 5.2rem
        height: 5.2rem
        border-radius: 50%
        border: none
        background: none
    &__page-num
        color: #292F36
        font-family: Jost
        font-size: 1.6rem
        font-style: normal
        font-weight: 500
        line-height: 2.4rem
        text-transform: capitalize

        width: 5.2rem
        height: 5.2rem
        border: 1px solid #CDA274
        border-radius: 50%

        display: flex
        justify-content: center
        align-items: center
        &_active
            background: #F4F0EC
            border: 1px solid #F4F0EC
    &__next-btn
        width: 5.2rem
        height: 5.2rem
        border: none
        border-radius: 50%
        background: none 
</style>