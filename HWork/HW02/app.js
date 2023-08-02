// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию)
// Создаем новый экземпляр Vue 3
const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Prod1', price: 954 },
                { name: 'Prod2', price: 57 },
                { name: 'Prod3', price: 2800 },
                { name: 'Prod4', price: 76 },
                // Добавьте другие товары по аналогии
            ],
            sortOrder: '', // По умолчанию сортируем по возрастанию
        }
    },
    computed: {
        sortedProducts() {
            // Просто возвращаем исходный массив товаров, если sortOrder не задан
            if (!this.sortOrder) {
                return this.products
            }

            // Копируем массив, чтобы не изменять исходный
            const sortedProducts = [...this.products]

            sortedProducts.sort((a, b) => {
                if (this.sortOrder === 'asc') {
                    return a.price - b.price
                } else if (this.sortOrder === 'desc') {
                    return b.price - a.price
                }
            })

            return sortedProducts
        },
    },

    methods: {
        sortProducts(order) {
            this.sortOrder = order
        },
    },
})

app.mount('#app')
