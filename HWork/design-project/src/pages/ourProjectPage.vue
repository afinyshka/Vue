<template>
    <div>
        <section class="articles m-b-200">
            <img src="@/assets/image/Our-project_photo.png" alt="interior photo" class="articles__img">
            <div class="articles__wrap">
                <h2 class="heading m-b-12">Our Project</h2>
                <div class="breadcrump">
                    <router-link to="/" class="breadcrump__item">Home</router-link>
                    <router-link to="/project" class="breadcrump__item">Project</router-link>
                </div>
            </div>
        </section>
        <div class="sort-area center m-b-61">

            <div class="sort-area__wrap">
                <div v-for="blockSortArea in blockSortAreas" :key="blockSortArea.id" class="sort-area__btn"
                    :class="{ 'sort-area__btn_active': selectedBlockSortArea === blockSortArea }"
                    @click="handleBlockSortAreaSelected(blockSortArea)">{{ blockSortArea
                    }}
                </div>
            </div>
        </div>
        <div class="project-card center m-b-61">
            <div class="project-card__wrap" :class="extraProjectCardClasses">
                <div v-for="card in displayedCards" :key="card.id" class="project-card__item">
                    <img :src="require(`@/assets/${card.img}`)" alt="interior" class="project-card__img">
                    <h3 class="project-card__subheading">{{ card.title }}</h3>
                    <p class="project-card__text">{{ card.text }}</p>
                    <router-link to="/project-details" class="project-card__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>

        </div>
        <paginationComponent class="center m-b-200" />

    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import paginationComponent from '../components/paginationComponent.vue'

export default {
    props: {
    },
    data() {
        return {
            pageKey: 'project',
            cardsPerPage: 4,
        }
    },
    components: {
        paginationComponent,
    },
    computed: {
        ...mapState(['selectedBlockSortArea', 'blockSortAreas', 'extraProjectCardClasses']),
        currentPage() {
            return this.$store.state.currentPage
            // Access currentPage directly
        },
        ...mapGetters(['displayedCards'])
    },
    created() {
        // Используйем Vuex для установки значения pageKey cardsPerPage
        this.setPageKey(this.pageKey)
        this.setCardsPerPage(this.cardsPerPage)
    },
    methods: {
        ...mapActions(['setSelectedBlockSortArea', 'setCurrentPage', 'setPageKey', 'setCardsPerPage']),
        handleBlockSortAreaSelected(blockSortArea) {
            this.setCurrentPage(1)
            if (blockSortArea === this.selectedBlockSortArea) {
                this.setSelectedBlockSortArea(null)
                // Удалить дополнительные классы, связанные с тегом:
                const newClasses = {
                    ...this.extraProjectCardClasses,
                    'project-card__wrap_bathroom': false,
                    'project-card__wrap_kitchen': false,
                    'project-card__wrap_bedroom': false,
                    'project-card__wrap_livingarea': false,
                }
                this.$store.commit('SET_ExtraProjectCardClass', newClasses)
            } else {
                this.setSelectedBlockSortArea(blockSortArea)

                const newClasses = {
                    ...this.extraProjectCardClasses,
                    'project-card__wrap_bathroom': blockSortArea === 'Bathroom',
                    'project-card__wrap_kitchen': blockSortArea === 'Kitchen',
                    'project-card__wrap_bedroom': blockSortArea === 'Bed Room',
                    'project-card__wrap_livingarea': blockSortArea === 'Living Area',
                }
                this.$store.commit('SET_ExtraProjectCardClass', newClasses)
            }
            this.$router.push(`/${this.pageKey}/${this.currentPage}`)
        },
    },
}
</script>

<style scoped lang="sass">
.articles
    position: relative
    &__img
        width: 100vw
    &__wrap
        border-radius: 3.7rem 3.7rem 0rem 0rem
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

.sort-area
    display: flex
    justify-content: center
    align-items: center
    // gap: 9.6rem
    
    color: #292F36
    text-align: center
    font-family: Jost, sans-serif
    font-size: 1.8rem
    font-style: normal
    font-weight: 600
    line-height: 2.25rem
    letter-spacing: 0.036rem
    &__wrap
        display: flex
        justify-content: space-between
        align-items: center
        border: 1px solid #CDA274
        border-radius: 1.8rem
        width: 88rem
    &__btn 
        padding: 2.6rem 6.6rem
        flex-shrink: 0
        border-radius: 2rem
        transition: all 0.4s ease-in-out
        &:hover, &_active 
            color: white
            background: #CDA274 

.project-card
    &__wrap
        display: flex
        flex-wrap: wrap
        flex-direction: column
        gap: 2rem
        max-height: 160rem
        &_bathroom
            max-height: 130rem
        &_kitchen
            max-height: 130rem
        &_bedroom
            max-height: 160rem 
        &_livingarea
            max-height: 130rem 
    &__item
        flex: 0 0 auto
        position: relative
        width: calc(50% - 2rem)
        height: fit-content
    &__img
        width: 100%
        height: auto
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
        &:hover
            transform: scale(1.1)

</style>