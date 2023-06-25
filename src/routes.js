
export const routes = [
    {
        path: '/',
        name: 'Home',
        showInSideBar : true,
        component : () => import( './routes/HomePage.vue' )
    },
    {
        path: '/status',
        name: 'Status',
        showInSideBar : true,
        component : () => import( './routes/StatusPage.vue' )
    },
    {
        path: '/stale',
        name: 'Stale',
        showInSideBar : true,
        component : () => import( './routes/StaleProducts.vue' )
    },
    {
        path: '/products',
        name: 'Products',
        showInSideBar : true,
        component : () => import( './routes/ViewProducts.vue' )
    },
    {
        path: '/edit-product/:id',
        name: 'EditProduct',
        showInSideBar : false,
        component : () => import( './routes/EditProduct.vue' )
    }
]
