<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>

	export default {
		name: 'App',
		mounted() {
			this.$store.dispatch('init')
			this.$store.dispatch('getBackData')
			this.$store.dispatch('initInbox')
		},
		methods:{
			
		}
	}
</script>
<style>
	@import url('@/static/css/1cs.css');
	@import url('@/static/css/app.0b23ee1c66.css');
	@import "element-ui/lib/theme-chalk/display.css";

	body {
		color: #000;
	}

	h1 {
		color: #000;
	}

	h2 {
		color: #000;
	}

	h3 {
		color: #000;
	}


	h4 {
		color: #000;
	}

	h5 {
		color: #000;
	}

	tr {
		background-color: #242b40;
	}

	td {
		border-bottom: none
	}
</style>