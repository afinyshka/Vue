import { createRouter, createWebHistory } from 'vue-router'
import indexPage from '@/pages/indexPage.vue'
import blogDetailsPage from '@/pages/blogDetailsPage.vue'
import blogPage from '@/pages/blogPage.vue'
import ourProjectPage from '@/pages/ourProjectPage.vue'
import projectDetailsPage from '@/pages/projectDetailsPage.vue'
import notFoundPage from '@/pages/notFoundPage.vue'
// import paginationComponent from '@/components/paginationComponent.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: indexPage
    },
    {
        path: '/blog/:pageNumber?',
        name: 'Blog',
        component: blogPage
    },
    {
        path: '/project/:pageNumber?',
        name: 'Project',
        component: ourProjectPage
    },
    // {
    //     path: '/project/:pageNumber',
    //     name: 'PaginationComponent',
    //     component: paginationComponent,
    // },
    {
        path: '/blog-details',
        name: 'Blog-details',
        component: blogDetailsPage
    },
    {
        path: '/project-details',
        name: 'Project-details',
        component: projectDetailsPage
    },
    {
        path: '/:CatchAll(.*)',
        name: '404',
        component: notFoundPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// Add scroll behavior for smooth scrolling to anchor links
router.beforeEach((to, from, next) => {
    if (to.hash) {
        const element = document.querySelector(to.hash)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            return
        }
    }
    next()
})

export default router
