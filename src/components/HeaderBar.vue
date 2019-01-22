<template>
  <div>
    <div class="header clearfix">
      <button class="sidebar-button" @click="sidebarIsShow=!sidebarIsShow"></button>
      <div class="search-box">
        <input type="text" class="search-area">
      </div>
      <ul class="function-box">
        <router-link to="/game" tag="li"></router-link>
        <router-link to="/load" tag="li"></router-link>
        <router-link to="/message" tag="li"></router-link>
      </ul>
    </div>
    <div class="sider-bg" v-show="sidebarIsShow" @click="sidebarIsShow=!sidebarIsShow"></div>
    <transition name="slide-left">
      <siderBar v-show="sidebarIsShow"></siderBar>
    </transition>
  </div>
</template>
<script>
import siderBar from './sideBar.vue'

export default {
  data () {
    return {
      sidebarIsShow: false
    }
  },
  components: {siderBar}
}
</script>
<style scoped>
.header {
  position: relative;
  padding: 0.4rem 0.5rem 0.4rem 1.8rem;
  width: 100%;
  background-color: #fb7299;
}
.sidebar-button,
.search-box {
  float: left;
}
.sidebar-button {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0.4rem;
  width: 1rem;
  height: 1rem;
  background: url(../assets/images/icons/nav.png) center center no-repeat;
  background-size: contain;
}
.search-box {
  position: relative;
  width: 10rem;
  padding: 0.2rem 0.2rem 0.2rem 1.5rem;
  border-radius: 7%/50%;
  background: rgb(228, 101, 139) url(../assets/images/icons/search-btn.png) 5% center no-repeat;
  background-size: auto 50%;
}
.search-box input {
  display: block;
  background-color: transparent;
  color: #fff;
  font-size: 12px;
}
ul.function-box {
  float: right;
  font-size: 12px;
  font-size: 0;
}
ul.function-box li {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  background: center center no-repeat;
  background-size: contain;
}
ul.function-box li:first-child {
  background-image: url(../assets/images/icons/game.png);
}
ul.function-box li:nth-child(2) {
  background-image: url(../assets/images/icons/load.png);
}
ul.function-box li:last-child {
  background-image: url(../assets/images/icons/message.png);
  margin-right: 0;
}
.sider-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.slide-left-enter-active, .slide-left-leave-active  {
  transition: all .3s;
}
.slide-left-enter, .slide-left-leave-to  {
  margin-left: -100%;
}
</style>
