<template>
  <ProductDetails :product="product1" />
  <ProductDetails :product="product2" />
</template>

<script>
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    ProductDetails
  },
  data() {
    return {
      product1: { name: 'Tropical Island', price: 78, available: false },
      product2: { name: 'Hot Safary', price: 95, available: true }
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
.out-of-stock
  color: red
</style>
