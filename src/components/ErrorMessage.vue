<template>
	<ui-alert state="error" ><slot></slot></ui-alert>
</template>
  
<script>

export default {

	name: 'ErrorMessage',

	data() {
		return {}
	},

	props: {},

	async created() {},

	methods: {}

}
  
  
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  