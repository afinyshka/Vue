import { createLogger, createStore } from 'vuex'


export default createStore({
  state: {
    blockSortAreas: ['Bathroom', 'Kitchen', 'Bed Room', 'Living Area'],
    selectedBlockSortArea: null,
    extraProjectCardClasses: {
      'project-card__wrap_bathroom': false,
      'project-card__wrap_kitchen': false,
      'project-card__wrap_bedroom': false,
      'project-card__wrap_livingarea': false
    },
    cards: [
      {
        img: 'image/Project_bedroom_01.png',
        title: 'Minimal Bedroom',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_bedroom_02.png',
        title: 'Classic Minimal Bedroom',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_bedroom_03.png',
        title: 'Minimal Bedroom table',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_bedroom_04.png',
        title: 'Modern Bedroom',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_bedroom_05.png',
        title: 'Minimal Bedroom',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_bedroom_06.png',
        title: 'Modern Bedroom',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_bedroom_07.png',
        title: 'System Table',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_bedroom_08.png',
        title: 'Modern Bedroom',
        text: 'Decor / Architecture',
        tag: 'Bed Room',
      },
      {
        img: 'image/Project_kitchen_01.jpeg',
        title: 'Minimal Kitchen',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_kitchen_02.jpeg',
        title: 'Classic Minimal Kitchen',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_kitchen_03.jpeg',
        title: 'Minimal Kitchen table',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_kitchen_04.jpeg',
        title: 'Modern Kitchen',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_kitchen_05.jpeg',
        title: 'Minimal Kitchen',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_kitchen_06.jpeg',
        title: 'Modern Kitchen',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_kitchen_07.jpeg',
        title: 'System Table',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_kitchen_08.jpeg',
        title: 'Modern Kitchen',
        text: 'Decor / Architecture',
        tag: 'Kitchen',
      },
      {
        img: 'image/Project_bathroom_01.jpeg',
        title: 'Minimal Bathroom',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_bathroom_02.jpeg',
        title: 'Classic Minimal Bathroom',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_bathroom_03.jpeg',
        title: 'Minimal Bathroom table',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_bathroom_04.jpeg',
        title: 'Modern Bathroom',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_bathroom_05.jpeg',
        title: 'Minimal Bathroom',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_bathroom_06.jpeg',
        title: 'Modern Bathroom',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_bathroom_07.jpeg',
        title: 'System Table',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_bathroom_08.jpeg',
        title: 'Modern Bathroom',
        text: 'Decor / Architecture',
        tag: 'Bathroom',
      },
      {
        img: 'image/Project_Livingarea_01.jpeg',
        title: 'Minimal Living Area',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
      {
        img: 'image/Project_Livingarea_02.jpeg',
        title: 'Classic Minimal Living Area',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
      {
        img: 'image/Project_Livingarea_03.jpeg',
        title: 'Minimal Living Area table',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
      {
        img: 'image/Project_Livingarea_04.jpeg',
        title: 'Modern Living Area',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
      {
        img: 'image/Project_Livingarea_05.jpeg',
        title: 'Minimal Living Area',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
      {
        img: 'image/Project_Livingarea_06.jpeg',
        title: 'Modern Living Area',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
      {
        img: 'image/Project_Livingarea_07.jpeg',
        title: 'System Table',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
      {
        img: 'image/Project_Livingarea_08.jpeg',
        title: 'Modern Living Area',
        text: 'Decor / Architecture',
        tag: 'Living Area',
      },
    ],
    headerLinks: [
      {
        id: 1,
        title: 'Home',
        url: '/',
      },
      {
        id: 2,
        title: 'Project',
        url: '/project',
      },
      {
        id: 3,
        title: 'Blog',
        url: '/blog',
      },
    ],
    selectedTag: null,
    currentPage: 1, // Текущая страница
    cardsPerPage: 4, // Количество карточек на странице
    startIndex: 0,
    endIndex: 0,
  },
  mutations: {
    SET_SELECTED_BLOCK_SORT_AREA(state, area) {
      state.selectedBlockSortArea = area
    },
    SET_ExtraProjectCardClass(state, payload) {
      state.extraProjectCardClasses = payload
    },
    SET_SELECTED_TAG(state, tag) {
      state.selectedTag = tag
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page
    },
  },
  getters: {
    getFilteredCards: state => {
      if (!state.selectedBlockSortArea) {
        return state.cards
      }
      return state.cards.filter(card => card.tag.includes(state.selectedBlockSortArea))
    },
    totalPages: (state, getters) => {
      return Math.ceil(getters.getFilteredCards.length / state.cardsPerPage)
    },
    displayedCards: (state, getters) => {
      state.startIndex = (state.currentPage - 1) * state.cardsPerPage
      state.endIndex = state.startIndex + state.cardsPerPage
      console.log('startIndex', state.startIndex, 'endIndex', state.endIndex)
      console.log('currentpage', state.currentPage)
      return getters.getFilteredCards.slice(state.startIndex, state.endIndex)
    },
    selectedTag: (state) => state.selectedTag,
  },
  actions: {
    setSelectedBlockSortArea({ commit }, area) {
      commit('SET_SELECTED_BLOCK_SORT_AREA', area)
    },
    setSelectedTag({ commit }, tag) {
      commit('SET_SELECTED_TAG', tag)
    },
    setCurrentPage({ commit }, page) {
      commit('SET_CURRENT_PAGE', page)
    },
  },
  modules: {
  },
})
