<template>
  <div class="logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
        fill="#CDA274" />
    </svg>
    <p class="logo__name">Interno</p>
  </div>
</template>
  
<script>
export default {
  props: {
    msg: String
  }
}

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.logo
    display: flex
    align-items: center
    gap: 1rem
    &__name
        color: #292F36
        font-family: DM Serif Display, sans-serif
        font-size: 4rem
        font-style: normal
        font-weight: 400
        line-height: 5rem

</style>
  