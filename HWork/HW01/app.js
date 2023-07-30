const app = Vue.createApp({
    data() {
        return {
            buttonText: 'Перевернуть',
            liTexts: ['Новый элемент списка'],
        }
    },
    methods: {
        reverseText() {
            this.buttonText = this.buttonText.split('').reverse().join('')
        },
        createNewLi() {
            this.liTexts.push('Новый элемент списка')
        },
        removeNewLi(index) {
            this.liTexts.splice(index, 1)
        },
    }
})

app.mount('#app')