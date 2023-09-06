<template>
    <header class="header center">
        <logoComponent />
        <nav class="header__menu">
            <router-link class="menu__link" v-for="headerLink in headerLinks" :key="headerLink.id" :to="headerLink.url">{{
                headerLink.title
            }}</router-link>
        </nav>
    </header>
</template>
 
<script>
import logoComponent from './logoComponent.vue'
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
.header
    display: flex
    justify-content: space-between
    margin-top: 4.4rem
    margin-bottom: 5.7rem

    &__menu
        display: flex
        align-items: center
        gap: 4.8rem
        color: #292F36
        text-align: center
        font-family: Jost, sans-serif
        font-size: 2rem
        font-style: normal
        font-weight: 400
        line-height: 2.5rem

.menu
    &__link
        color: inherit
        text-decoration: none
        &:hover
            color: #CDA274
</style>
  