<template>
	<div class="header">
		<ul class="header__info">
			<li>
  				<el-button type="primary" icon="el-icon-more" circle @click="$emit('triggerMenu')"></el-button>
			</li>
			<li>
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				</el-breadcrumb>
			</li>
		</ul>
		<ul class="header__right">
			<template v-if="userInfo">
				<li>
					<i class="el-icon-message header__message-icon"></i>
					<el-badge :value="12" class="item header__message-badge"></el-badge>
				</li>
				<li class="el-dropdown-link">
					<el-dropdown class="header__dropdwon" @command="logout">
						<div class="header__right__icon"><img src="../assets/icon.jpg" alt="icon"></div>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="logout">注销</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
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
			userInfo: null,
			isCollapse: true
		}
	},
	methods: {
		logout (command) {
			if(command == 'logout') {
				this._setCookie("", "", -1);
				// this.userInfo = this._getCookie();
				this.$router.push({
					path: '/login'
				})
			}
		}
	},
	created() {
		this.userInfo = this._getCookie();
		// console.log(this)
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
		.header__info{
			display: flex;
			flex-direction: row;
			align-items: center;
			&>li:first-child{
				margin-right: 20px;
			}
		}
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
				margin-left: 10px;
				margin-right: 10px;
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
					line-height: 20px;
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
			.header__message-icon{
				padding: 0 25px;
			}
			.header__message-badge{
				position: absolute;
				left: 37px;
				top: -6px;
			}
			.header__dropdwon{
				height: 100%;
				display: flex;
				align-items: center;
			}
			.el-badge__content{
				border: none;
			}
		}
	}
</style>

