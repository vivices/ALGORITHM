<template>
	<!-- <div class="username"> -->
		<el-input :type="inputType" :placeholder="placeholder" class="ueser-input" :prefix-icon="inputIcon" v-model="value" @blur="getValue"></el-input>
	<!-- </div> -->
</template>

<script>
export default {
	props: [
		'placeholder',
		'inputIcon',
		'inputType',
	],
	data () {
		return {
			value:''
		}
	},
	methods: {
		getValue () {
			console.log(this.value)
		}
	}
}
</script>

<style scoped lang="less">

</style>

