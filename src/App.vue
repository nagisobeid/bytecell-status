<template lang="pug">
div.app-container
	//- Drawer
	ui-drawer#drawer( 
		v-model="drawerState"
		type='modal' 
		nav-id='demo-menu' )
		ui-drawer-header
			ui-drawer-content
				ui-nav
					ui-nav-item.nav-item( v-for='route in routes' 
						:key='route.name' 
						@click="toggleDrawerState" 
						href='javascript:void(0)' )
						router-link.nav-link(
								v-if="route.showInSideBar"
								:to='route.path' 
							) {{ route.name }}
	//- Content
	div.content-container
		//- App bar
		ui-top-app-bar.demo-app-bar(content-selector='.app-content' nav-id='demo-menu')
			| ByteCell
		//- App content
		div.app-content
			div.view
				router-view

</template>

<script>

import { routes } from './routes.js'

export default {

	name: 'App',

	data() {
		return {
			routes,
			drawerState : false
		}
	},

	created() {
		console.log( this.drawerState )
	},

	watch : {
		drawerState : function( n ) {
			console.log( 'watched', n )
		}
	},

	methods: {
		toggleDrawerState() {
			this.drawerState = !this.drawerState;
		}
	}
}

</script>

<style lang="scss">
	html {
		height: 100%;
	}
	body {
		padding: 0px;
		margin: 0px;
		height: 100%;
		#app {
			height: 100%;
		}
	}
	.app-container {
		width: 100%;
		height: 100%;
		.nav-item {
			text-align: center;
			.nav-link {
				height: 100%;
				width: 100%;
				color: black;
				margin: 0px;
				padding: 0px;
				border-radius: 5px;
			}
		}
		.demo-app-bar {
			width: 100%;
			//height: 70px;
			background-color: rgb(0, 0, 0);
		}
	}
	.view {
		//margin-top: 20px;
		//height: 100%
		height: calc(100% - 80px)
	}
	.app-content {
		height: 100%;
	}
	.content-container {
		height: 100%;
	}
</style>
