<template>
  <div class="pagination">
    <button class="pagination__prev-btn"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52"
        viewBox="0 0 53 52" fill="none">
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg></button>
    <span class="pagination__page-num pagination__page-num_active">01</span>
    <span class="pagination__page-num">02</span>
    <span class="pagination__page-num">03</span>
    <button class="pagination__next-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg></button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  methods: {
  },

  computed: {
  }
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
