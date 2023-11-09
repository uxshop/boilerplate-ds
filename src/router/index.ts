import { createRouter, createWebHistory } from 'vue-router'
import type { NavigationGuardNext } from 'vue-router'

const routes = [
	{
		path: '/'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
})

export default router
