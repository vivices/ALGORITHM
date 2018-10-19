<template>
	<div class="login">
		<div class="login-form">
			<h3 class="login-form-title">VUE ADMIN</h3>
			<form>
				<UserInput placeholder="管理员输入admin" inputIcon="el-icon-edit-outline" inputType="text" v-model="username"/>
				<UserInput placeholder="管理员输入admin" inputIcon="el-icon-document" inputType="password" class="input_password" v-model="password"/>
				<el-button type="primary" class="login-btn" @click="login">登陆</el-button>
			</form>
		</div>
	</div>
</template>


<script>

import UserInput from '../components/UserInput'

export default {
	name: 'login',
	data () {
		return {
			username: '',
			password: ''
		}
	},
	components : {
		UserInput: UserInput
	},
	watch: {
		// 'username': function(newValue, oldValue) {
		// 	console.log(newValue)
		// },
		// 'password': function(newValue, oldValue) {
		// 	console.log(newValue)
		// }
	},
	methods: {
		login () {
			// console.log(this.username,this.password)
			if(this.username == 'admin' && this.password == 'admin') {
				this.$router.push({
					path: '/home', 
					props: true,
					params: { isLogin: true }
				})
				this.$message({
					message: '登陆成功!',
					type: 'success'
				});
			} else {
				this.$message.error('账号或密码错误');
			}
		}
	},
}

</script>

<style scoped lang="less">
	.login{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		.login-form{
			width: 350px;
			height: 400px;
			background-color: #fff;
			border-radius: 5px;
			padding: 20px 40px;
			.login-form-title{
				text-align: center;
				margin-top: 20px;
			}
			.ueser-input{
				margin-top: 40px;
			}
			.input_password{
				margin-top: 20px;
			}
			.login-btn{
				width: 100%;
				margin-top: 60px;
			}
		}
	}
</style>


