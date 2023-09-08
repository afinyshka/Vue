<template>
    <section class="articles m-b-200">
        <img src="@/assets/image/Project-Details_Photo.png" alt="interior photo" class="articles__img">
    </section>
    <section class="our-project-blog center m-b-100">
        <div class="our-project-blog__wrap">
            <h2 class="heading m-b-12">Minimal Look Bedrooms</h2>
            <p class="subtext m-b-35">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
                dignissim
                maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim.
                Praesent at
                nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p>
            <p class="subtext">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus
                ipsum
                nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante
                vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt
                ligula id purus porttitor.</p>
        </div>
    </section>
    <div class="center m-b-200">
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :slides-per-view="1" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper center">
            <swiper-slide v-for="sliderImg in sliderImgs" :key="sliderImg.id">
                <div class="swiper-zoom-container swiper__box ">
                    <img :src="require(`@/assets/image/${sliderImg}`)" alt="interior" class="swiper__img">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/zoom'

import { Zoom, Navigation, Pagination } from 'swiper/modules'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper)
        };
        const onSlideChange = () => {
            console.log('slide change')
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Zoom],
        }
    },
    data() {
        return {
            sliderImgs: ['Project_kitchen_01.jpeg', 'Project_kitchen_02.jpeg', 'Project_kitchen_03.jpeg', 'Project_kitchen_04.jpeg', 'Project_kitchen_05.jpeg', 'Project_kitchen_06.jpeg', 'Project_kitchen_07.jpeg', 'Project_kitchen_08.jpeg', 'Project_Livingarea_09.jpeg',]
        }
    },
}

</script>

<style scoped lang="sass">
.articles
    position: relative
    &__img
        width: 100vw

.our-project-blog
    display: flex
    justify-content: center
    &__wrap
        max-width: 55%

.swiper
    width: 100%
    height: 100%
    border-radius: 7rem
    &__box
        border-radius: 7rem
        width: 100%
        height: 80rem
        overflow: hidden
    &__img
        width: 100%
        height: 100%
        border-radius: 7rem
        object-fit: cover


// .swiper-slide 
    // overflow: hidden
    // &-hidden
        // object-fit: cover

</style>