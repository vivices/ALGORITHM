<template>
	<el-card shadow="always">
		 <p>接下来的算法学习将在此记录</p>
    </el-card>
</template>
<script>

import store from '@/store';

export default {
	name: 'message',
	created () {
		// console.log(store.state.msg);
		// store.commit('operate');
		// console.log(store.state.msg);
	}
}
</script>
