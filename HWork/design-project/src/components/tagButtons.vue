<template>
  <div class="info-articles__tags">
    <h3 class="subheading m-b-24">Tags</h3>
    <div class="tags">
      <button v-for="btnTag in btnTags" :key="btnTag.id" class="subtext tags__btn" @click="selectTag(btnTag)"
        :class="{ 'tags__btn_active': isSelected(btnTag) }"> {{ btnTag }}</button>
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
    }
  },
  methods: {
    selectTag(tag) {
      this.$store.dispatch('setSelectedTag', tag)
    },
    isSelected(tag) {
      return this.$store.getters.selectedTag === tag
    },
  },

  computed: {
    btnTags() {
      // Здесь можно получить теги из вашего хранилища или другого источника данных
      return ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning']
    },
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
