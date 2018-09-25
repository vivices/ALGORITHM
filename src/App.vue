<template>
  <div id="app">
    <div id="left-sidebar">
      <img src="" alt="" class="logo">
      <router-link to="/" class="sidebar-item">首页</router-link>
      <router-link to="/messgae" class="sidebar-item">信息</router-link>
      <router-link to="/cards" class="sidebar-item">卡片</router-link>
    </div>
    <div id="main">
      <div id="top-sidebar"></div>
      <div id="container"><router-view/></div>
    </div>
    <router-view/>
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
  #main{
    width: 90%;
    background-color: gray;
    #top-sidebar{
      // width: 100%;
      height: 100px;
      background-color: #e5e5e5;
    }
    #container{

    }
  }
}
</style>
