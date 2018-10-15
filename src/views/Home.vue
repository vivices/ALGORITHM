<template>
	<div class="homePage">
		<p>home page</p>
	</div>
</template>
<script>
export default {
	name: 'home',
	beforeRouteEnter (to, from, next) {
		console.log('触发home组件内部')
		next()
	},
	data () {
		return {

		}
	},
}
</script>
