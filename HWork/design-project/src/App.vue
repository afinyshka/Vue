<template>
    <headerComponent />
    <router-view />
    <footerComponent />
</template>

<script>
import headerComponent from './components/headerComponent.vue'
import footerComponent from './components/footerComponent.vue'

export default {
    name: 'App',
    components: {
        headerComponent,
        footerComponent
    }
}
</script>

<style lang="sass">
*, ::after, ::before
  padding: 0
  margin: 0
  // box-sizing: border-box

html
    font-size: 62.5%
    background: #FFFFFF

.center
    max-width: 120rem
    padding-left: calc(50% - 60rem)
    padding-right: calc(50% - 60rem)

.m-b-08
    margin-bottom: 0.8rem

.m-b-12
    margin-bottom: 1.2rem

.m-b-14
    margin-bottom: 1.4rem

.m-b-20
    margin-bottom: 2.0rem

.m-b-22
    margin-bottom: 2.2rem

.m-b-24
    margin-bottom: 2.4rem

.m-b-27
    margin-bottom: 2.7rem

.m-b-30
    margin-bottom: 3.0rem

.m-b-32
    margin-bottom: 3.2rem

.m-b-35
    margin-bottom: 3.5rem

.m-b-44
    margin-bottom: 4.4rem

.m-b-46
    margin-bottom: 4.6rem

.m-b-48
    margin-bottom: 4.8rem

.m-b-50
    margin-bottom: 5.0rem

.m-b-54
    margin-bottom: 5.4rem

.m-b-61
    margin-bottom: 6.1rem

.m-b-93
    margin-bottom: 9.3rem

.m-b-96
    margin-bottom: 9.6rem

.m-b-100
    margin-bottom: 10rem

.m-b-150
    margin-bottom: 15rem

.m-b-200
    margin-bottom: 20rem

.heading
    color: #292F36
    text-align: center
    font-family: DM Serif Display, sans-serif
    font-size: 5rem
    font-style: normal
    font-weight: 400
    line-height: 6.25rem
    letter-spacing: 0.1rem
    &_left
        text-align: left

.subheading
    color: #292F36
    font-family: DM Serif Display, sans-serif
    font-size: 2.5rem
    font-style: normal
    font-weight: 400
    line-height: 3.125rem
    letter-spacing: 0.05rem

.subtext
    color: #4D5053
    font-family: Jost, sans-serif
    font-size: 2.2rem
    font-style: normal
    font-weight: 400
    line-height: 3.3rem
    letter-spacing: 0.022rem
    &_center
        text-align: center
    &_width
        margin-left: auto
        margin-right: auto
        width: 62%
    &_left
        text-align: left
        margin-left: 0
        margin-right: 0
        width: 90%
    &_ol
        counter-reset: list-counter
    &_li
        list-style: none
        position: relative
        margin-left: 2rem
        &::before
            content: counter(list-counter)
            position: absolute
            left: 0
            color: #CDA274
            font-family: DM Serif Display, sans-serif
            font-size: 2rem
            font-style: normal
            font-weight: 400
            line-height: 2.5rem
            letter-spacing: 0.04rem
            text-align: right
            margin-left: -2rem
            counter-increment: list-counter

.date-text
    color: #4D5053
    font-family: Jost
    font-size: 1.6rem
    font-style: normal
    font-weight: 400
    line-height: 2.4rem
    letter-spacing: 0.016rem
    text-transform: capitalize

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
</style>
