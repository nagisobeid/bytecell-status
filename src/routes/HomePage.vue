<template>
    <div class="container center">
		<div class="child top">
			<ui-icon size="48">face</ui-icon>
		</div>
		<div class="child bottom">
			<p>you shouldnt be here</p>
		</div>
    </div>
</template>
  
<script>

export default {

	name: 'StaleProducts',

	data() {
		return {
			headers : []
		}
	},

	props: {},

	async created() {},

	methods: {}

}
  
  
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	background-color: rgb(255, 255, 255);
	height: 100%;
}
.center {
	position: relative;
	.child {
		margin: 0;
		position: absolute;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.top {
		top: 40%;
		color: #ff0000;
	}
	.bottom {
		top: 45%;
	}
}
</style>
  