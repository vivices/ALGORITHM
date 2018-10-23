<template>
	<el-container>
			<el-menu default-active="/home" router :collapse="isCollapse" class="nav">
				<el-menu-item index="/home">
					<i class="el-icon-info"></i>
					<span slot="title">首页</span>
				</el-menu-item>
				<el-menu-item index="/message">
					<i class="el-icon-bell"></i>
					<span slot="title">信息</span>
				</el-menu-item>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-tickets"></i>
						<span slot="title">卡片</span>
					</template>
					<el-menu-item index="cards">选项1</el-menu-item>
					<!-- <el-menu-item index="cards/select2">选项2</el-menu-item> -->
				</el-submenu>
			</el-menu>
		<el-container>
			<el-header>
				<Header @triggerMenu="triggerMenu"/>
			</el-header>
			<el-main>
				<!-- <transition name="slide-right"> -->
					<router-view/>
				<!-- </transition> -->
			</el-main>
		</el-container>
	</el-container>
</template>




<script>

import Header from '../components/Header'

export default {
	name: 'mainContent',
	props: [
		
	],
	components: {
		Header: Header
	},
	data () {
		return {
			isCollapse: false
		}
	},
	methods: {
		triggerMenu () {
			this.isCollapse = !this.isCollapse
		}
	},
	created () {
		
	},
}
</script>

<style scoped lang="less">
	.el-container{
		height: 100%;
		.nav:not(.el-menu--collapse) {
			width: 200px;
			min-height: 400px;
		}
	}
	.el-header {
		background-color: #fff;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	.el-aside {
		// background-color: #fff;
		color: #333;
		text-align: center;
		.tac,.el-col,.el-menu{
			height: 100%;
		}
	}
	.el-main {
		background-color: #f5f5f5;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
</style>
