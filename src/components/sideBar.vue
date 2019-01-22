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
      <li class="index">首页</li>
      <li class="history">历史记录</li>
      <li class="cache">离线缓存</li>
      <li class="collect">我的收藏</li>
      <li class="soon">稍后再看</li>
    </ul>
    <ul class="sidebar">
      <li class="contribute">投稿</li>
      <li class="creation">创作中心</li>
      <li class="activity">热门活动</li>
    </ul>
    <ul class="sidebar">
      <li class="live">直播中心</li>
      <li class="member">我的大会员</li>
      <li class="flow">免流量服务</li>
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
    z-index: 15;
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
    padding: 0.4rem 0 0.4rem 2.2rem;
    background: 0.6rem center no-repeat;
    background-size: 1rem auto;
  }
  ul.sidebar .index {
    background-image: url(../assets/images/icons/house2.png);
  }
  ul.sidebar .history {
    background-image: url(../assets/images/icons/history.png);
  }
  ul.sidebar .cache {
    background-image: url(../assets/images/icons/cache.png);
  }
  ul.sidebar .collect {
    background-image: url(../assets/images/icons/collect.png);
  }
  ul.sidebar .soon {
    background-image: url(../assets/images/icons/movie.png);
  }
  ul.sidebar .contribute {
    background-image: url(../assets/images/icons/upload.png);
  }
  ul.sidebar .creation {
    background-image: url(../assets/images/icons/creation.png);
  }
  ul.sidebar .activity {
    background-image: url(../assets/images/icons/activity.png);
  }
  ul.sidebar .live {
    background-image: url(../assets/images/icons/live.png);
  }
  ul.sidebar .member {
    background-image: url(../assets/images/icons/da.png);
  }
  ul.sidebar .flow {
    background-image: url(../assets/images/icons/server.png);
  }
  ul.setup-bar {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    font-size: 12px;
  }
</style>
