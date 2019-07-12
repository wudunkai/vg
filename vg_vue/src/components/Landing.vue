<template>
  <div>
    <div class="landing_wrap">
      <div class="landing_nav">
        <div class="nav_box">
          <a href="/" class="vg_logo">
            <img src="../assets/landing/vg_logo.png">
          </a>
          <div class="flex_nav">
            <a href="#" class="flex_nav_items download">
              <span>下载游戏</span>
              <span id="alpha">PC Beta</span>
            </a>
            <a href="#/home" class="flex_nav_items home">
              <span>进入官网</span>
            </a>
          </div>
        </div>
      </div>
      <div class="flex_content">
        <div class="flex_slogin">
          <img src="../assets/landing/slogn.png">
        </div>
        <div class="flex_download">
          <div class="download_code"></div>
          <a href="#" class="download_ios"></a>
          <a href="#" class="download_android"></a>
          <a href="#" class="download_pc"></a>
        </div>
        <newsitems class="flex_news"></newsitems> 
      </div>
      <div class="video_wrap">
        <video loop="true" autoplay="autoplay" muted="muted">
          <source src="http://127.0.0.1:3000/landing-黑腕死神.mp4" type="video/mp4">
          您的浏览器不支持视频播放
        </video>
      </div>
      <!-- <div class="audio_warp">
        <audio loop="true" autoplay="autoplay" preload="auto">
          <source src="http://127.0.0.1:3000/vg_bgm.mp3" type="audio/mpeg">
          您的浏览器不支持音频播放
        </audio>
      </div> -->
    </div>
    <footers></footers> 
  </div>
</template>
<script>
import Footers from '../views/common/Footers'
import NewsItems from '../views/common/NewsItems'
export default {
  data() {
    return {
      
    }
  },
  components:{
    "footers":Footers,
    "newsitems":NewsItems,
  },    
}
</script>
<style scoped>
.landing_wrap {
  position: relative;
  width: 100%;
  height: 10rem;
  z-index: 10;
}
/* 页头 */
.landing_nav {
  width: 100%;
  height: .92rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(rgba(55,55,55,.4),rgba(0,0,0,1));
}
.nav_box {
  width: 100%;
  position: relative;
  max-width: 12rem;
  margin: 0 auto;
}
.nav_box .vg_logo {
  width: 2.42rem;
  top: -.1rem;
  left: -.11rem;
  position: absolute;
}
.flex_nav {
  height: .9rem;
  display: flex;
  font-size: .24rem;
  flex-flow: row nowrap;
  justify-content: flex-end
}
/* 下载游戏 */
.flex_nav_items.download {
  border: 1px solid #bc92f0;
  border-right: none;
  background: linear-gradient(rgba(131,83,226,.8),rgba(131,83,226,.2));
  display: block;
}
.flex_nav_items {
  width: 2.7rem;
  height: 100%;
  color: #fff;
  transform: skewX(-20deg);
}
.flex_nav_items.download span {
  position: relative;
  top:-7px;
}
.flex_nav_items span {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(20deg)
}
.flex_nav_items.download:hover {
  background: linear-gradient(#8965d1,#3e2375);
}
#alpha {
  position: relative;
  top: -77px;
  font-size: .02rem;
  left: 7px;
  color: #ffbc5d;
}
/* 进入官网 */
.flex_nav_items.home {
  border: 1px solid transparent;
  border-image: linear-gradient(to right,#ffbc5d,rgba(77,77,77,0)) 1 1;
  border-right: none;
  background: linear-gradient(to right,rgba(252,204,132,.8),rgba(77,77,77,0));
  display: block;
}
.flex_nav_items {
  width: 2.7rem;
  height: 100%;
  color: #fff;
  transform: skewX(-20deg);
}
.flex_nav_items.home:hover {
  background: linear-gradient(to right,#846848,rgba(77,77,77,0));
}
/* landing内容 */
.flex_content {
  width: 100%;
  height: 100%;
  max-width: 12rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center; 
}
.flex_slogin {
  width: 100%;
}
.flex_download {
  width: 100%;
  margin-top: -.3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center; 
}
.flex_download .download_android, .flex_download .download_code, .flex_download .download_ios, .flex_download .download_pc {
    margin: 0 .1rem;
    background-image: url(../assets/landing/download_btn.png);
    background-repeat: no-repeat;
    background-size: 8rem 1rem;
}
.flex_download .download_android, .flex_download .download_ios, .flex_download .download_pc {
    width: 1.8rem;
    height: .66rem;
}
.flex_download .download_code {
  width: 1rem;
  height: 1rem;
  background-position: -.13rem 0;
}
.flex_download .download_ios {
  background-position: -1.33rem -.17rem;
}
.flex_download .download_android {
  background-position: -3.33rem -.17rem;
}
.flex_download .download_pc {
  background-position: -5.33rem -.17rem;
}
.video_wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 0;
  overflow: hidden;
}
/* 新闻样式 */
.flex_news {
  width: 100%;
  margin: 1rem auto 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
