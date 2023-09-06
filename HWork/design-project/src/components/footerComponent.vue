<template>
    <footer class="footer center m-b-96">
        <div class="footer__item">
            <logoComponent class="m-b-14" />
            <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__links"></div>
            <p class="footer__links">
                <a class="footer__link" href="#"><i class="fa-brands fa-twitter"></i></a>
                <a class="footer__link" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a class="footer__link" href="#"><i class="fa-brands fa-instagram"></i></a>
            </p>
        </div>
        <div class="footer__item">
            <h3 class="footer__subheading">Pages</h3>
            <router-link class="footer__text footer__link" v-for="headerLink in headerLinks" :key="headerLink.id"
                :to="headerLink.url">{{
                    headerLink.title
                }}</router-link>
        </div>
        <div class="footer__item">
            <h3 class="footer__subheading">Services</h3>
            <p class="footer__text">Morgage</p>
            <p class="footer__text">Invest</p>
            <p class="footer__text">Buy</p>
        </div>
        <div class="footer__item">
            <h3 class="footer__subheading">Contacts</h3>
            <p class="footer__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="footer__text">contact@interno.com</p>
            <p class="footer__text">(123) 456 - 7890</p>
        </div>
    </footer>
</template>

<script>
import logoComponent from "./logoComponent.vue"
import { mapState } from 'vuex'

export default {
    components: {
        logoComponent,
    },
    computed: {
        ...mapState(['headerLinks']),
    },
}
</script>
  
<style scoped lang="sass">
.footer
    display: flex
    justify-content: space-between
    gap: 10.1rem

    &__item
        display: flex
        flex-direction: column
        flex-shrink: 0
        min-width: 12.5rem
        &:nth-last-child(1)
            width: 25.8rem
        &:first-child
            width: 39.3rem

    &__link
        text-decoration: none
        transition: all 0.2s ease-out
        color: #292F36
        &:active, &:visited
            color: #292F36
        &:hover
            color: #CDA274

    &__links
        font-family: Font Awesome 5 Brands, sans-serif
        font-size: 1.8rem
        font-style: normal
        font-weight: 400
        line-height: 2.16rem
        letter-spacing: 0.099rem
        text-transform: uppercase

    &__text
        color: #4D5053
        font-family: Jost, sans-serif
        font-size: 2.2rem
        font-style: normal
        font-weight: 400
        line-height: 3.3rem
        letter-spacing: 0.022rem
        margin-bottom: 3.2rem
        // text-decoration: none
    &__subheading
        color: #292F36
        font-family: DM Serif Display, sans-serif
        font-size: 2.5rem
        font-style: normal
        font-weight: 400
        line-height: 3.125rem
        margin-bottom: 2.6rem
.fa-brands
    margin-right: 5rem
</style>