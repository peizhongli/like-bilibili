<template>
  <div class="sider">
    <div class="user-info">
      <div class="user-img"></div>
      <p class="user-main">
        <span class="user-name">Ninjaya_</span>
        <span class="user-level">lv.4</span>
        <span class="user-type">正式会员</span>
      </p>
      <p class="user-wealth">
        <span>B币：0.0 </span>
        <span>硬币：511.0</span>
      </p>
    </div>
    <ul class="count-box">
      <li>2<br />动态</li>
      <li>55<br />关注</li>
      <li>1<br />粉丝</li>
    </ul>
    <ul class="sidebar">
      <li>首页</li>
      <li>历史记录</li>
      <li>离线缓存</li>
      <li>我的收藏</li>
      <li>稍后再看</li>
    </ul>
    <ul class="sidebar">
      <li>投稿</li>
      <li>创作中心</li>
      <li>热门活动</li>
    </ul>
    <ul class="sidebar">
      <li>直播中心</li>
      <li>我的大会员</li>
      <li>免流量服务</li>
    </ul>
    <ul class="setup-bar">
      <li>设置</li>
      <li>主题</li>
      <li>夜间</li>
    </ul>
  </div>
</template>
<style scoped>
  .sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 70%;
    height: 100%;
    font-size: 14px;
    background-color: #fff;
  }
  .user-info {
    padding: 0.8rem 0.6rem;
    font-size: 12px;
    background-color: #fb7299;
  }
  .user-info .user-img {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background-color: #fff;
  }
  .user-info .user-main {
    margin: 0.4rem 0 0.2rem;
  }
  .user-info .user-main span {
    display: inline-block;
  }
  .user-info .user-main .user-name {
    font-size: 16px;
    color: #fff;
  }
  .user-info .user-main .user-level {
    padding: 0 0.1rem;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
  }
  .user-info .user-main .user-type {
    padding: 0 0.1rem;
    border-radius: 4px;
    color: #fb7299;
    background-color: rgb(254, 197, 212);
  }
  .user-info .user-wealth {
    color: rgb(254, 197, 212);
  }
  .user-info .user-wealth span:first-child {
    margin-right: 0.3rem;
  }
  ul.count-box {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;
    font-size: 12px;
    text-align: center;
  }
  ul.sidebar {
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #ccc;
  }
  ul.sidebar li {
    padding: 0.4rem 0 0.4rem 2.6rem;
    background: url(../assets/images/icons/house.png) 0.6rem center no-repeat;
    background-size: auto 1rem;
  }
  ul.setup-bar {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    font-size: 12px;
  }
</style>
