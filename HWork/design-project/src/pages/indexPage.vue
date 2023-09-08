<template>
    <section class="intro center m-b-96">
        <img class="intro__img" src="@/assets/image/intro_photo.png" alt="interior picture">
        <div class="intro__wrap">
            <h1 class="intro__heading">Let Your Home
                Be Unique</h1>
            <p class="intro__text">There are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>
            <buttonComponent :buttonLabel="buttonLabel" :buttonLink="buttonLink" v-scroll-to="'#my-section'" />
        </div>
    </section>
    <section id="my-section" class="project center m-b-96">
        <h2 class="heading m-b-08">Follow Our Projects</h2>
        <p class="subtext subtext_center subtext_width m-b-93">It is a long established fact that a reader will be
            distracted by the of
            readable
            content of page lookings at its layouts points.</p>
        <div class="project__cards">
            <div v-for="projectCard in  projectCards " :key="projectCard.id" class="project-card">
                <img :src="require(`@/assets/image/${projectCard.img}`)" alt="interior" class="project-card__img">
                <h3 class="project-card__subheading">{{ projectCard.header }}</h3>
                <p class="project-card__text">{{ projectCard.breadcrumps }}</p>
                <router-link to="/project-details" class="project-card__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></router-link>
            </div>
        </div>

    </section>
    <section class="counter center m-b-96">

        <div class="counter__item">
            <h2 class="counter__num">12</h2>
            <p class="counter__text">Years Of Experiance</p>
        </div>
        <div class="counter__item">
            <h2 class="counter__num">85</h2>
            <p class="counter__text">Success Project</p>
        </div>
        <div class="counter__item">
            <h2 class="counter__num">15</h2>
            <p class="counter__text">Active Project</p>
        </div>
        <div class="counter__item">
            <h2 class="counter__num">95</h2>
            <p class="counter__text">Happy CUstomers</p>
        </div>
    </section>
    <section class="news center m-b-96">
        <h2 class="heading m-b-12">Articles & News</h2>
        <p class="subtext subtext_center subtext_width m-b-54">It is a long established fact that a reader will be
            distracted by the of
            readable
            content of
            a page when lookings at its layouts the points of using.</p>
        <div class="news__cards">
            <div v-for="newsCard in newsCards" :key="newsCard.id" class="news-card">
                <img :src="require(`@/assets/image/${newsCard.img}`)" alt="interior" class="news-card__img">
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
</template>

<script>
import buttonComponent from '../components/buttonComponent.vue'

export default {
    props: {
        buttonLabel: {
            type: String,
            default: 'Get Started',
        },
        buttonLink: {
            type: String,
            default: "/#my-section",
        },
    },
    components: {
        buttonComponent,
    },
    data() {
        return {
            projectCards: [
                {
                    img: 'Photo-1.png',
                    header: 'Modern Kitchan',
                    breadcrumps: 'Decor / Artchitecture',
                }, {
                    img: 'Photo-2.png',
                    header: 'Modern Kitchan',
                    breadcrumps: 'Decor / Artchitecture',
                }, {
                    img: 'Photo-3.png',
                    header: 'Modern Kitchan',
                    breadcrumps: 'Decor / Artchitecture',
                },
                {
                    img: 'Photo-4.png',
                    header: 'Modern Kitchan',
                    breadcrumps: 'Decor / Artchitecture',
                },
            ],
            newsCards: [
                {
                    img: 'Photo_articles_1.png',
                    header: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022',
                },
                {
                    img: 'Photo_articles_2.png',
                    header: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December, 2022',
                },
                {
                    img: 'Photo_articles_3.png',
                    header: 'Best For Any Office & Business Interior Solution',
                    date: '25 December, 2022',
                },
            ],
        }
    },
}
</script>

<style scoped lang="sass">
.intro
    height: 75.8rem
    &__img
        max-height: 100%
        border-radius: 7rem
        position: absolute

    &__wrap
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: flex-start
        height: 34.2rem
        width: 42.4rem
        padding-left: 5.2rem
        position: relative
        top: 50%
        transform: translateY(-50%)

    &__heading
        color: #292F36
        font-family: DM Serif Display, sans-serif
        font-size: 6.5rem
        font-style: normal
        font-weight: 400
        line-height: 8.125rem
    &__text
        color: #4D5053
        font-family: Jost, sans-serif
        font-size: 2.2rem
        font-style: normal
        font-weight: 400
        line-height: 3.3rem
        letter-spacing: 0.022rem
    &__btn
        display: flex
        padding: 2.6rem 4.9rem 2.6rem 4.8rem
        flex-direction: row
        justify-content: center
        align-items: center
        gap: 1rem

        color: #FFF
        text-align: center
        font-family: Jost, sans-serif
        font-size: 1.8rem
        font-style: normal
        font-weight: 600
        line-height: 2.25rem
        letter-spacing: 0.036rem
        text-decoration: none

        border-radius: 1.8rem
        background: #292F36
        box-shadow: 0rem 1rem 2rem 0rem rgba(192, 192, 192, 0.35)
        transition: all 0.3s ease-in-out
        &:hover
            transform: scale(1.02)
            box-shadow: 0.7rem 0.7rem 1.3rem 0rem #4d5053a8


.project
    &__cards
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        gap: 5.4rem
.project-card
    position: relative
    width: 55rem
    &__img
        margin-bottom: 2.8rem
    &__subheading
        color: #292F36
        font-family: DM Serif Display, sans-serif
        font-size: 2.5rem
        font-style: normal
        font-weight: 400
        line-height: 3.125rem
        letter-spacing: 0.05rem
        margin-bottom: 0.4rem
    &__text
        color: #4D5053
        font-family: Jost, sans-serif
        font-size: 2.2rem
        font-style: normal
        font-weight: 400
        line-height: 3.3rem
        letter-spacing: 0.022rem
    &__btn
        width: 7rem
        height: 7rem
        border-radius: 50%
        border: none
        flex-shrink: 0
        position: absolute
        right: 0
        bottom: 0
        transition: transform 0.3s ease-in-out
        &:hover
            transform: scale(1.1)

    &:nth-child(4n+1) .project-card__img
        border-top-right-radius: 8rem
    &:nth-child(4n+2) .project-card__img
        border-top-left-radius: 8rem
    &:nth-child(4n+3) .project-card__img
        border-bottom-right-radius: 8rem
    &:nth-child(4n) .project-card__img
        border-bottom-left-radius: 8rem

.counter
    height: 45.7rem
    background: #F4F0EC
    display: flex
    // justify-content: space-around
    align-items: center

    &__item
        display: flex
        flex-direction: column
        align-items: center
        flex: 1
        position: relative
        &:not(:last-child)::after
            content: ''
            position: absolute
            top: 50%
            right: 0
            transform: translateY(-50%)
            width: 0.1rem
            height: 13rem
            background: #CDA274

    &__num
        color: #CDA274
        font-family: DM Serif Display, sans-serif
        font-size: 8.5rem
        font-style: normal
        font-weight: 400
        line-height: 10.625rem
        letter-spacing: 0.17rem
        text-align: center
        margin-bottom: 1.6rem
    &__text
        color: #4D5053
        font-family: Jost, sans-serif
        font-size: 2.2rem
        font-style: normal
        font-weight: 400
        line-height: 3.3rem
        letter-spacing: 0.022rem
        text-align: center

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
        width: 29rem
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
        flex-shrink: 0
        position: absolute
        right: 2.1rem
        bottom: 3.8rem
        transition: transform 0.3s ease-in-out
        &:hover
            transform: scale(1.1)
</style>