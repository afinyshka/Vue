<template>
    <div>
        <section class="not-found m-b-200">
            <div class="not-found__left">
                <h3 class="not-found__head">404</h3>
                <p class="not-found__text">We are sorry, but the page
                    you requested was not found</p>
                <router-link class="not-found__btn" to="/">Back To Home <svg xmlns="http://www.w3.org/2000/svg" width="18"
                        height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg></router-link>
            </div>
            <div class="not-found__right">
                <img src="@/assets/image/Photo_not_found.png" alt="not found" class="not-found__img">
            </div>
        </section>
    </div>
</template>

<script>
export default {

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

    &__btn
        display: flex
        padding: 2.6rem 5.4rem
        justify-content: center
        align-items: center
        gap: 1rem
        border-radius: 1.8rem
        background: #292F36
        box-shadow: 0rem 1rem 2rem 0rem rgba(192, 192, 192, 0.35)

        color: #FFF
        text-align: center
        font-family: Jost
        font-size: 1.8rem
        font-style: normal
        font-weight: 600
        line-height: 2.25rem
        letter-spacing: 0.036rem
        text-decoration: none
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