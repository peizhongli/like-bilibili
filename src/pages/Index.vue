<template>
  <div>
    <ul class="nav">
      <router-link to="/home/live" tag="li">直播</router-link>
      <router-link to="/home/recommend" tag="li">推荐</router-link>
      <router-link to="/home/hot" tag="li">热门</router-link>
      <router-link to="/home/subscribe" tag="li">追番</router-link>
    </ul>
    <router-view>
    </router-view>
  </div>
</template>
<style scoped>
  ul.nav {
    padding: 0 .5rem;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 0 0 .05rem 0 rgba(156, 59, 59, .2);
  }
  ul.nav li {
    width: 1.5rem;
    text-align: center;
    font-size: 12px;
    color: #555;
    padding: .35rem 0;
    border-bottom: .08rem solid #fff;
  }
  ul.nav li.router-link-active {
    color: #fb7299;
    border-color: #fb7299;
  }
</style>
