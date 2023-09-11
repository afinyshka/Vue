<template>
  <div v-if="totalPages > 1" class="pagination">
    <router-link @click="prevPage" :disabled="currentPage === 1" class="pagination__prev-btn" :to="getPageLinkPrev()">
      <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg></router-link>

    <router-link @click="thisPage(pageNumber)" class="pagination__page-num" v-for="pageNumber in totalPages"
      :key="pageNumber" :to="getPageLink(pageNumber)"
      :class="{ 'pagination__page-num_active': currentPage === pageNumber }">
      {{ pageNumber }}
    </router-link>

    <router-link @click="nextPage" :disabled="currentPage === totalPages" class="pagination__next-btn"
      :to="getPageLinkNext()"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52"
        fill="none">
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg></router-link>


  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      pageNumber: 1,
    }
  },
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['totalPages']),
    pageKey() {
      return this.$store.state.pageKey
    },
    cardsPerPage() {
      return this.$store.state.cardsPerPage
    },
  },
  methods: {
    ...mapActions(['setCurrentPage', 'setPageKey', 'setCardsPerPage']),
    prevPage() {
      if (this.currentPage > 1) {
        this.setCurrentPage(this.currentPage - 1);
      }
    },
    thisPage(pageNumber) {
      this.setCurrentPage(pageNumber)
      console.log('currentPage', this.currentPage, 'pageNumber', pageNumber)
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.setCurrentPage(this.currentPage + 1);
      }
    },
    getPageLink(pageNumber) {
      return `/${this.pageKey}/${pageNumber}`
    },
    getPageLinkPrev() {
      if (this.currentPage > 1) {
        return `/${this.pageKey}/${this.currentPage - 1}`
      }
      return `/${this.pageKey}/1`
    },
    getPageLinkNext() {
      if (this.currentPage < this.totalPages) {
        return `/${this.pageKey}/${this.currentPage + 1}`
      }
      return `/${this.pageKey}/${this.totalPages}`
    },
    updatePageKey() {
      // Вызывайте действие для обновления значения в store
      this.setPageKey(this.pageKey)
    },
    updateCardsPerPage() {
      // Вызывайте действие для обновления значения в store
      this.setCardsPerPage(this.cardsPerPage)
    },
  },
  mounted() {
    // Вызываем метод для обновления pageKey и cardsPerPage в store
    this.updatePageKey()
    this.updateCardsPerPage()

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
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
        text-decoration: none

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
