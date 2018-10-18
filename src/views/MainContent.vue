<template>
	<div class="mainContent">
      <div id="left-sidebar">
        <img src="" alt="" class="logo">
        <router-link to="/home" class="sidebar-item">首页</router-link>
        <router-link to="/message" class="sidebar-item">信息</router-link>
        <router-link to="/cards" class="sidebar-item">卡片</router-link>
      </div>
      <div id="content">
        <div id="top-sidebar">
			<Header/>
        </div>
        <div id="container">
          <transition name="slide">
            <router-view/>
          </transition>
		</div>
      </div>
	</div>
</template>

<script>

import Header from '../components/Header'

export default {
	name: 'mainContent',
	data () {
		return {

		}
	},
	components: {
		Header: Header
	}
}
</script>

<style scoped lang="less">
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
