<template>
	<!-- <div class="username"> -->
		<el-input :type="inputType" :placeholder="placeholder" class="ueser-input" :prefix-icon="inputIcon" :value="value" @input="getValue($event)" tabindex></el-input>
	<!-- </div> -->
</template>

<script>
export default {
	props: [
		'placeholder',
		'inputIcon',
		'inputType',
		'password',
		'value'
	],
	data () {
		return {

		}
	},
	methods: {
		getValue(e) {
			this.$emit("input", e)
		}
	}
}
</script>

<style scoped lang="less">

</style>

