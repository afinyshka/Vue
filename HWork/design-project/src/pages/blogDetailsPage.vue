<template>
    <section class="articles m-b-200">
        <img src="@/assets/image/Photo-blog-details.png" alt="interior photo" class="articles__img">
    </section>
    <section class="info-articles center m-b-96">
        <tagButtons />
        <div class="info-articles__main">
            <h2 class="heading heading_left m-b-12">Let’s Get Solution for Building
                Construction Work</h2>
            <img src="@/assets/image/BlogDetails_01.png" alt="kitchen" class="info-articles__img m-b-46">
            <div class="date-breadcrumps  m-b-48">
                <p class="date-text">26 December,2022 </p>
                <div class="breadcrumps">
                    <router-link to="/blog" class=" 
                        breadcrump__item breadcrump__item_small">Interior</router-link>
                    <router-link to="/" class="breadcrump__item breadcrump__item_small">Home</router-link>
                    <router-link to="/project-details" class="breadcrump__item breadcrump__item_small">Decore</router-link>
                </div>
            </div>
            <p class="subtext m-b-35">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere
                in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injecthumour, or randomised words which don't
                look even slightly believable.</p>
            <p class="subtext m-b-35">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                the
                Internet tend to repeat predefined chunks as necessary.</p>
            <div class="quotation-block  m-b-27">
                <p class="quotation-block__sign"><svg width="74" height="56" viewBox="0 0 74 56" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                            fill="#CDA274" />
                    </svg>
                </p>
                <h3 class="subheading quotation-block__subheading">The details are not the
                    details.</h3>
                <h3 class="subheading quotation-block__subheading">
                    They make the
                    design.</h3>
            </div>


            <div class="m-b-12" v-for="article in filteredArticles" :key="article.id">

                <h2 class="heading heading_left m-b-20">{{ article.title }}</h2>
                <p class="subtext m-b-24">{{ article.content }}</p>
                <ol class="subtext subtext_ol m-b-44">
                    <li v-for="li in article.list" :key="li.id" class="subtext_li m-b-32">{{ li }}</li>
                </ol>
                <img :src="require(`@/assets/${article.img}`)" alt="interior and decor" class="info-articles__img m-b-35">
                <p class="subtext">{{ article.content2 }}</p>
            </div>
        </div>
    </section>
</template>
  
<script>
import tagButtons from '../components/tagButtons.vue'


export default {
    components: {
        tagButtons,
    },
    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: 'Design sprints are great',
                    content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    img: 'image/BlogDetails_02.png',
                    content2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tags: ['Kitchen'],
                },
                {
                    id: 2,
                    title: 'Design sprints are great',
                    content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    img: 'image/BlogDetails_03.jpeg',
                    content2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tags: ['Bedroom'],
                },
                {
                    id: 3,
                    title: 'Design sprints are great',
                    content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    img: 'image/BlogDetails_04.jpeg',
                    content2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tags: ['Building', 'Architecture'],
                },
                {
                    id: 4,
                    title: 'Design sprints are great',
                    content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    img: 'image/BlogDetails_05.jpeg',
                    content2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tags: ['Building', 'Architecture'],
                },
                {
                    id: 5,
                    title: 'Design sprints are great',
                    content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    img: 'image/BlogDetails_06.jpeg',
                    content2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tags: ['Kitchen', 'Kitchen Planning'],
                },
                {
                    id: 6,
                    title: 'Design sprints are great',
                    content: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    list: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
                    img: 'image/BlogDetails_07.jpeg',
                    content2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tags: ['Bedroom'],
                },
            ],
        }
    },
    computed: {
        selectedTag() {
            return this.$store.getters.selectedTag
        },
        filteredArticles() {
            const selectedTag = this.selectedTag
            if (!this.selectedTag) {
                return this.articles
            }
            return this.articles.filter(article => article.tags.includes(this.selectedTag))
        },
    },
    methods: {
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.articles
    position: relative
    &__img
        width: 100vw
.info-articles
    display: flex
    gap: 5.2rem
    &__img
        max-width: 100%
        border-radius: 6rem

.date-breadcrumps
        display: flex
        justify-content: space-between

.quotation-block
        border-radius: 5rem
        background: #F4F0EC
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        color: #CDA274
        padding-top: 7.5rem
        padding-bottom: 6.5rem
        &__sign

        &__subheading
            font-style: italic
            color: #CDA274

.info-articles
    display: flex
    flex-direction: row-reverse
    gap: 5.2rem
    &__img
        max-width: 100%
        border-radius: 6rem
  </style>
  