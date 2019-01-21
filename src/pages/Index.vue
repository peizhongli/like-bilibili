<template>
  <div>
    <ul class="nav">
      <router-link to="/live" tag="li">直播</router-link>
      <router-link to="/recommend" tag="li">推荐</router-link>
      <router-link to="/hot" tag="li">热门</router-link>
      <router-link to="/subscribe" tag="li">追番</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<style scoped>
  ul.nav {
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
  }
  ul.nav li {
    width: 1.5rem;
    text-align: center;
    font-size: 12px;
    color: #555;
    padding-bottom: 0.1rem;
    border-bottom: 0.08rem solid #fff;
  }
  ul.nav li.router-link-active {
    color: #fb7299;
    border-color: #fb7299;
  }
</style>

