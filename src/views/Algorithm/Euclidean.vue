<template>
	<el-card shadow="always">
		<p>欧几里得算法</p>
		<div class="container">
			<div class="input-box">
				<user-input v-model="firstNum"/>
			</div>
			<div class="input-box">
				<user-input v-model="secondNum"/>
			</div>
			<el-button
				type="primary"
				@click="handleClick"
			>
				生成最大公约数
			</el-button>
			<p class="res-tip">结果：</p>
			<p>{{ result }}</p>
		</div>
    </el-card>
</template>

<script>
	import UserInput from '../../components/UserInput';
	let gcd = (p, q) => {
		if (q === 0) return p;
		return gcd (q, p % q);
	};

	export default {
		name: 'euclidean',
		components: {
			UserInput
		},
		data() {
			return {
				firstNum: null,
				secondNum: null,
				result: null
			}
		},
		methods: {
			handleClick() {
				if (this.firstNum && this.secondNum && this.firstNum > 0 && this.secondNum > 0) {
					this.result = gcd(this.firstNum, this.secondNum);
				} else {
					this.$message.error('请填写2个非负整数');
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		margin-top: 30px;
		display: flex;
		align-items: center;
		.input-box {
			width: 150px;
			margin-right: 50px
		}
		.res-tip {
			margin: 0 50px;
		}
	}
</style>
