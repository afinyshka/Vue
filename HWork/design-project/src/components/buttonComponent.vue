<template>
    <div>
        <router-link class="btn" :to="buttonLink">{{ buttonLabel }}<svg xmlns="http://www.w3.org/2000/svg" width="18"
                height="17" viewBox="0 0 18 17" fill="none">
                <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274"
                    stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg></router-link>
    </div>
</template>
  
<script>
export default {
    props: {
        buttonLabel: String,
        buttonLink: String,
    },
    data() {
        return {}
    },
    methods: {

    },

    computed: {

    }
}
</script>
  

<style scoped lang="sass">
.btn
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
    font-family: Jost, sans-serif
    font-size: 1.8rem
    font-style: normal
    font-weight: 600
    line-height: 2.25rem
    letter-spacing: 0.036rem
    text-decoration: none
    transition: all 0.3s ease-in-out
    &:hover
        transform: scale(1.02)
        box-shadow: 0.7rem 0.7rem 1.3rem 0rem #4d5053a8
</style>
  