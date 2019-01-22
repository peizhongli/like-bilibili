<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <a href="item.link">
        <div class="cover-box">
          <img :src="item.thumb" alt="">
          <p class="clearfix">
            <span class="barrage-count">6.4万</span>
            <span class="play-count">427</span>
            <span class="video-duration">10:25</span>
          </p>
        </div>
        <p class="video-title">{{item.title}}</p>
        <p class="video-des">{{item.artist}}</p>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    items: Array
  }
}
</script>
<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: .5rem 0 -.5rem;
  }
  li {
    width: 45%;
    margin-bottom: .5rem;
    border-radius: 0 0 .2rem .2rem;
    background-color: #fff;
  }
  .cover-box {
    position: relative;
    height: 4rem;
    overflow: hidden;
  }
  .cover-box p {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 .3rem;
    font-size: 12px;
    color: #fff;
    line-height: 1rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
  }
  .cover-box p .barrage-count, .cover-box p .play-count {
    float: left;
    padding-left: .8rem;
    background: left center no-repeat;
    background-size: auto .7rem;
  }
  .cover-box p .barrage-count {
    margin-right: .3rem;
    background-image: url(../assets/images/icons/barrage.png);
  }
  .cover-box p .play-count {
    background-image: url(../assets/images/icons/count.png);
  }
  .cover-box p .video-duration {
    float: right;
  }
  .cover-box img {
    width: 100%;
  }
  .video-title {
    padding: .3rem .4rem;
    line-height: 1;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .video-des {
    padding: 0 .4rem .2rem;
    line-height: 1;
    font-size: 12px;
    color: #666;
  }
</style>
