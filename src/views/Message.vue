<template>
	<el-card shadow="always">
		 <p>message page</p>
    </el-card>
</template>
<script>

import store from '../store'

export default {
	name: 'message',
	created () {
		console.log(store.state.msg);
		store.commit('operate');
		console.log(store.state.msg);
	}
}
</script>
