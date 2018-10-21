<template>
	<div class="header">
		<ul class="header__info">
			<li>等待显示信息</li>
		</ul>
		<ul class="header__right">
			<template v-if="userInfo">
				<li><div class="header__right__info-num-icon"><i class="el-icon-message"></i><div class="header__right_info-num">10</div></div></li>
				<li><div class="header__right__icon"><img src="../assets/icon.jpg" alt="icon"></div></li>
			</template>
			<template v-else>
				<li class="login-btn"><router-link to="/login">登陆</router-link></li>
			</template>
		</ul>
	</div>
</template>

<script>


export default {
	props: [
		
	],
	data () {
		return {
			userInfo:null
		}
	},
	created() {
        this.userInfo = this._getCookie();
	}
}


</script>

<style scoped lang="less">
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		// padding: 15px 20px;
		.header__right{
			height: 100%;
			display: flex;
			align-items: center;
			.header__right__icon{
				width: 40px;
				height: 40px;
				border-radius: 20px;
				overflow: hidden;
				// background-size: cover; 
				margin-left: 20px;
				margin-right: 20px;
			}
			.header__right__info-num-icon{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: center;
				.header__right_info-num{
					width: 30px;
					height: 20px;
					border-radius: 10px;
					background-color: red;
					text-align: center;
					color: #fff;
					margin-top: -10px;
					margin-left: 3px;
				}
			}
			&>li{
				height: 100%;
				display: flex;
				align-items: center;
				cursor: pointer;
				position: relative;
				top: 0;
				border-bottom: 2px solid transparent;
			}
			&>li:hover{
				border-bottom: 2px solid #404040;
			}
			.login-btn{
				margin-right: 40px;
				color: #000;
				padding: 0 10px;
			}
			&>li:hover a{
				color: #fff;
			}
			.login-btn:hover{
				background-color: #404040;
			}
		}
	}
</style>

