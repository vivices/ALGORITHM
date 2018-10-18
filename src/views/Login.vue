<template>
	<div class="login">
		<div class="login-form">
			<h3 class="login-form-title">VUE ADMIN</h3>
			<form>
				<UserInput placeholder="管理员输入admin" inputIcon="el-icon-edit-outline" inputType="text"/>
				<UserInput placeholder="管理员输入admin" inputIcon="el-icon-document" inputType="password" class="input_password"/>
				<router-link to="/home"><el-button type="primary" class="login-btn">登陆</el-button></router-link>
			</form>
		</div>
	</div>
</template>


<script>

import UserInput from '../components/UserInput'

export default {
	name: 'login',
	components : {
		UserInput: UserInput
	},
	beforeRouteLeave: (to,from,next) => {
		next()
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


