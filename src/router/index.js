import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '../routes.js'

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes
})

export default ( app ) => {
	app.use( router )
}

