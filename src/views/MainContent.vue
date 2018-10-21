<template>
	<!-- <div class="mainContent">
      <div id="left-sidebar">
      </div>
      <div id="content">
        <div id="top-sidebar">
			<Header :isLogin="isLogin"/>
        </div>
        <div id="container">
          <transition name="slide">
            <router-view/>
          </transition>
		</div>
      </div>
	</div> -->
	<el-container>
		<el-aside width="200px">
			<img src="" alt="" class="logo">
			<router-link to="/home" class="sidebar-item">首页</router-link>
			<router-link to="/message" class="sidebar-item">信息</router-link>
			<router-link to="/cards" class="sidebar-item">卡片</router-link>
		</el-aside>
		<el-container>
			<el-header>
				<Header/>
			</el-header>
			<el-main>
				<transition name="slide">
					<router-view/>
				</transition>
			</el-main>
		</el-container>
	</el-container>
</template>




<script>

import Header from '../components/Header'

export default {
	name: 'mainContent',
	props: [
		// 'isLogin'
	],
	components: {
		Header: Header
	},
	data () {
		return {
			
		}
	},
	methods: {

	},
	created () {
	}
}
</script>

<style scoped lang="less">
	.el-container{
		height: 100%;
	}
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		.logo{
			width: 30px;
		}
		.sidebar-item{
			text-decoration: none;
			color: #f5f5f560;
			display: block;
			text-align: center;
			line-height: 50px;
			font-weight: 600;
		}
		.sidebar-item:hover{
			// background-color: #e5e5e5;
			color: #fff;
		}
		.router-link-exact-active{
			background-color: #e5e5e5;
			color: #333;
		}
		.router-link-exact-active:hover{
			color: #000;
		}
	}
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	.mainContent{
	display: flex;
	flex-direction: row;
	height: 100%;
	#left-sidebar{
		width: 10%;
		height: 100%;
		background-color: #333;
		// overflow-y: scroll;
		.logo{
		width: 30px;
		}
		.sidebar-item{
		text-decoration: none;
		color: #f5f5f560;
		display: block;
		text-align: center;
		line-height: 50px;
		font-weight: 600;
		}
		.sidebar-item:hover{
		// background-color: #e5e5e5;
		color: #fff;
		}
		.router-link-exact-active{
		background-color: #e5e5e5;
		color: #333;
		}
		.router-link-exact-active:hover{
		color: #000;
		}
	}
		#content{
			width: 90%;
			background-color: gray;
			#top-sidebar{
			// width: 100%;
			height: 60px;
			background-color: #e5e5e5;
				.login{
					width: 100px;
					height: 100px;
					background-color: green;
				}
			}
		}
		.login-page{
			position: absolute;
			
		}
	}
</style>
