<template>
  <div id="app">
    <router-view name="login"></router-view>
    <router-view name="mainContent"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data:null
    }
  },
  methods: {
    
  }
}
</script>


<style scoped lang="less">
  #app{
    height: 100%;
  }
</style>
