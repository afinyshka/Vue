<template>
  <h2>{{ product.name }}</h2>
  <p>{{ formattedPrice }}</p>
  <p :class="{ 'out-of-stock': !product.available, 'in-stock': product.available }"> {{ availabilityStatus }} </p>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    product: {
      name: String,
      price: Number,
      available: Boolean,
    }
  },
  computed: {
    formattedPrice() {
      return `$${this.product.price}`
    },
    availabilityStatus() {
      return this.product.available ? 'Available' : 'Out of stock'
    }
  },
  methods: {

  },
}
</script>


<style scoped lang = "sass">
.out-of-stock
  color: red

.in-stock
  color: green
</style>
