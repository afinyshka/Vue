<template>
  <div class="info-articles__tags">
    <h3 class="subheading m-b-24">Tags</h3>
    <div class="tags">
      <!-- <div class="subtext tags__btn tags__btn_active">Kitchen</div> -->
      <button v-for="btnTag in btnTags" :key="btnTag.id" class="subtext tags__btn" @click="selectTag(btnTag)"
        :class="{ 'tags__btn_active': selectedTag === btnTag }"> {{ btnTag }}</button>
      <!-- <p class="subtext">{{ selectedTag }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      btnTags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom'],
      selectedTag: null,
    }
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = tag === this.selectedTag ? null : tag
      this.$emit('tagSelected', tag)
    },
  },

  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.tags
    display: flex
    flex-wrap: wrap
    width: 33.5rem
    align-items: flex-start
    gap: 1.1rem
    
    &__btn
        color: #292F36
        text-align: center
        font-family: Jost
        font-size: 1.8rem
        font-style: normal
        font-weight: 400
        line-height: 2.25rem
        letter-spacing: 0.036rem
        display: flex
        padding: 0.9rem 3rem
        justify-content: center
        align-items: center
        gap: 1rem
        border-radius: 1rem
        background: #F4F0EC
        border: none
        cursor: pointer
        &_active
            color: #FFF
            background: #292F36
</style>
