<template>
  <ul class="footer">
    <router-link to="/home" tag="li">首页</router-link>
    <router-link to="/channel" tag="li">频道</router-link>
    <router-link to="/dynamic" tag="li">动态</router-link>
  </ul>
</template>
<style scoped>
  ul.footer {
    position: fixed;
    bottom: 0;
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 0 0.01rem 0 rgba(0, 0, 0, .2);
    background-color: #fff;
  }
  ul.footer li {
    display: inline-block;
    display: block;
    width: 2rem;
    padding: 1.6rem 0 0.3rem;
    font-size: 12px;
    color: #555;
    text-align: center;
    background: center 0.3rem no-repeat;
    background-size: 55% auto;
  }
  ul.footer li:first-child {
    background-image: url(../assets/images/icons/house.png);
  }
  ul.footer li:nth-child(2) {
    background-image: url(../assets/images/icons/channel.png);
  }
  ul.footer li:last-child {
    background-image: url(../assets/images/icons/dynamic.png);
  }
  ul.footer li.router-link-active {
    color: #fb7299;
  }
  ul.footer li:first-child.router-link-active {
    background-image: url(../assets/images/icons/house-pink.png);
  }
  ul.footer li:nth-child(2).router-link-active {
    background-image: url(../assets/images/icons/channel-pink.png);
  }
  ul.footer li:last-child.router-link-active {
    background-image: url(../assets/images/icons/dynamic-pink.png);
  }
</style>
