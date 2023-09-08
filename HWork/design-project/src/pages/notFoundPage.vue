<template>
    <div>
        <section class="not-found m-b-200">
            <div class="not-found__left">
                <h3 class="not-found__head">404</h3>
                <p class="not-found__text">We are sorry, but the page
                    you requested was not found</p>
                <buttonComponent :buttonLabel="buttonLabel" :buttonLink="buttonLink" />
            </div>
            <div class="not-found__right">
                <img src="@/assets/image/Photo_not_found.png" alt="not found" class="not-found__img">
            </div>
        </section>
    </div>
</template>

<script>
import buttonComponent from '../components/buttonComponent.vue'

export default {
    props: {
        buttonLabel: {
            type: String,
            default: 'Back To Home',
        },
        buttonLink: {
            type: String,
            default: '/',
        },
    },

    components: {
        buttonComponent,
    },

}
</script>

<style scoped lang="sass">
.not-found
    display: flex
    // gap: 8.1rem
    justify-content: space-between
    height: calc( 100vh - 13.9rem )
    &__left
        padding-left: calc(50% - 60rem)
        display: flex
        justify-content: center
        align-items: flex-start
        flex-direction: column
        gap: 1.5rem
        flex: 0 0 auto
    &__head
        color: #CDA274
        font-family: DM Serif Display
        font-size: 25rem
        font-style: normal
        font-weight: 400
        line-height: 31.25rem
    &__text
        color: #292F36
        font-family: DM Serif Display
        font-size: 3.5rem
        font-style: normal
        font-weight: 400
        line-height: 5.25rem
        letter-spacing: 0.035rem
        max-width: 60rem
    &__right
        border-bottom-left-radius: 35rem
        height: 100%
        flex: 0 0 50vw
    &__img
        border-bottom-left-radius: 35rem
        height: 100%
        width: 100%
        object-fit: cover
</style>