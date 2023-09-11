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
    newsCards: [
      {
        img: 'image/Photo_articles_1.png',
        header: 'Let’s Get Solution For Building Construction Work',
        date: '26 December, 2022',
      },
      {
        img: 'image/Photo_articles_2.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
      },
      {
        img: 'image/Photo_articles_3.png',
        header: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
      },
      {
        img: 'image/Photo_articles_4.png',
        header: 'Let’s Get Solution For Building Construction Work',
        date: '26 December, 2022',
      },
      {
        img: 'image/Photo_articles_5.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
      },
      {
        img: 'image/Photo_articles_6.png',
        header: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
      },
      {
        img: 'image/Photo_articles_2.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
      }, {
        img: 'image/Photo_articles_2.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
      }, {
        img: 'image/Photo_articles_2.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
      }, {
        img: 'image/Photo_articles_2.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
      }, {
        img: 'image/Photo_articles_2.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
      }, {
        img: 'image/Photo_articles_2.png',
        header: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
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
    cardsPerPage: Number, // Количество карточек на странице
    startIndex: 0,
    endIndex: 0,
    pageKey: '',
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
    SET_PAGE_KEY(state, newPageKey) {
      state.pageKey = newPageKey;
    },
    SET_CARDS_PER_PAGE(state, newCardsPerPage) {
      state.cardsPerPage = newCardsPerPage
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
      if (state.pageKey === 'project') {
        return Math.ceil(getters.getFilteredCards.length / state.cardsPerPage)
      } else if (state.pageKey === 'blog') {
        return Math.ceil(state.newsCards.length / state.cardsPerPage)
      }

    },
    displayedCards: (state, getters) => {
      state.startIndex = (state.currentPage - 1) * state.cardsPerPage
      state.endIndex = state.startIndex + state.cardsPerPage
      console.log('startIndex', state.startIndex, 'endIndex', state.endIndex)
      console.log('currentpage', state.currentPage)
      if (state.pageKey === 'project') {
        return getters.getFilteredCards.slice(state.startIndex, state.endIndex)
      } else if (state.pageKey === 'blog') {
        return state.newsCards.slice(state.startIndex, state.endIndex)
      }
    },
    selectedTag: (state) => state.selectedTag,
    getPageKey(state) {
      return state.pageKey
    },
    getCardsPerPage(state) {
      return state.cardsPerPage
    },
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
    setPageKey({ commit }, newPageKey) {
      commit('SET_PAGE_KEY', newPageKey)
    },
    setCardsPerPage({ commit }, cards) {
      commit('SET_CARDS_PER_PAGE', cards)
    },
  },
  modules: {
  },
})
