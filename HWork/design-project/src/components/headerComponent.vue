<template>
    <header class="header center">
        <logoComponent />
        <div class="header__menu">
            <a href="index.html" class="menu__link">Home</a>
            <a href="project.html" class="menu__link">Project</a>
            <a href="blog.html" class="menu__link">Blog</a>
        </div>
    </header>
</template>
 
<script>
import logoComponent from './logoComponent.vue'

export default {
    components: {
        logoComponent,
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
</style>
  