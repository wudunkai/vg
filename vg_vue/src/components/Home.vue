<template>
  <div class="wrapper" ref="elememt">
    <div class="main">
      <headers></headers>
      <sidebar></sidebar>
      <section class="header">
        <h2>集高画质和战略深度于一体的</h2>
        <h4>移动MOBA游戏</h4>
        <div class="device_area">
          <a href="javascript:void(0);" class="code_btn">二维码</a>
          <a href="#" class="appstore_btn" target="_blank">app store</a>
          <a href="#" class="android_btn" target="_blank">app store</a>  
        </div>
        <p class="game_description" v-html="GameDescription"></p>
      </section>
      <section class="news_wrap">
        <div class="title_wrap">
          <h4>新闻中心</h4>
          <a href="#" class="more_news">查看更多</a>
        </div>
        <newsitems class="flex_news_item show_for_lg"></newsitems>
      </section> 
      <section class="map_wrap">
        <h2>即刻征战5V5风暴高地<span></span></h2>
        <div class="map_content">
          <p class="map_description" v-html="mapdescription"></p>
          <div class="map_video">
            <video loop="true" autoplay="autoplay" muted="muted">
              <source src="http://127.0.0.1:3000/home/video_landing.mp4" type="video/mp4">
            </video>
            <a href="javascript:void(0);" @click="videoplay" class="video_play_btn">播放</a>
          </div>
        </div>
      </section>
      <section class="heroes_wrap">
        <div class="flex_features_wrap">
          <div class="features_item" v-for="(item,index) of features" :key="index">
            <img :src="'http://127.0.0.1:3000/'+item.pic" class="features_img">
            <div class="features_text">
              <h2>{{item.texth2}}</h2>
              <h4>{{item.texth4}}</h4>
              <p>{{item.textp}}</p>
            </div>
          </div>  
        </div>
      </section>
      <footers></footers> 
    </div>
    <div id="boxModel" :style="box" :class="myshow"></div>
    <div  id="popBox" :style="pop" :class="myshow">
      <div class="w-light-box">
        <div class="head"></div>
        <div class="content">
          <video ref="map" width="100%" height="100%" controls="controls" autoplay="autoplay" preload="auto" id="videos">
            您的浏览器暂时无法播放此视频
          </video>
        </div>
      </div>
      <a class="closeBtn" @click="closebtn" href="javascript:;"></a>
    </div>
  </div>
</template>
<script>
import Headers from '../views/common/Headers'
import Sidebar from '../views/common/Sidebar'
import Footers from '../views/common/Footers'
import NewsItems from '../views/common/NewsItems'
export default {
  data() {
    return {
      GameDescription:`由前拳头公司和暴雪娱乐的开发人员强强联合，倾力打造纯正的移动MOBA体验
      <br />从5分钟决胜的闪电战，到极具深度的5v5 MOBA激战，休闲和竞技随心选择，沉浸到这款玩法超凡、制作精良的移动游戏中来吧！`,
      mapdescription:"充满着危险和神秘的风暴高地，恐怖的巨龙暗爪和魔翼是风暴女王心爱的宠物，捕获他们将改变战局的走势！",
      features:[],
      box:"",
      pop:"",
      myshow:"",
    }
  },
  methods: {
    closebtn(){
      this.myshow = "";
      this.$refs.map.src = ""
    },
    videoplay:function(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/home/video_map.mp4"
    },
    tl(){
      var width = document.documentElement.clientWidth;
      var t = 0 + "px";
      var l = width*0.1 + "px";
      this.pop = "top:" + t + ";" + "left:" + l ;
    }
  },
  created() {
    //发送ajax
    this.axios.get("http://127.0.0.1:3000/Home").then(result => {
      this.features=result.data.data;
    })
    this.tl()
  },
  components:{
    "headers":Headers,
    "sidebar":Sidebar,
    "newsitems":NewsItems,
    "footers":Footers,
  },    
}
</script>
<style scoped>
/* home头部样式 */
.header {
  padding-top: 28%;
  background-image: url(../assets/home/header_bg_1920.jpg);position: relative;
  padding-right: .2rem;
  padding-left: .2rem;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
}
.header h2 {
  font-weight: 800;
  font-size: .5rem;
}
.header h4 {
  font-weight: 500;
  font-size: .24rem;
}
.header h2,h4 {
  text-align: center;
  letter-spacing: .04rem;
  margin:10px 0;
  color: #fff;
  text-shadow: 0 0 0.1rem #000;
}
.header .device_area {
  width: 10.38rem;
  max-width: none;
  height: 5.01rem;
  margin: .3rem auto;
  background-size: 98% auto;
  position: relative;
  background-image: url(../assets/home/device_apple.png);
  background-repeat: no-repeat;
  background-position: center center;
}
.header .device_area .code_btn {
  top: .45rem;
  left: .1rem;
  width: 1.41rem;
  height: 1.43rem;
  transform-origin: center;
  text-indent: -99.99rem;
}
.header .device_area .appstore_btn {
  top: .45rem;
  left: 1.6rem;
  width: 1.81rem;
  height: .67rem;
  text-indent: -99.99rem;
  background-position: -1.58rem 0;

}
.header .device_area .android_btn {
  top: 1.2rem;
  left: 1.6rem;
  width: 1.81rem;
  height: .67rem;
  background-position: -1.58rem -.76rem;
}
.header .device_area .android_btn, .header .device_area .appstore_btn, .header .device_area .code_btn {
  overflow: hidden;
  text-indent: -99.99rem;
  position: absolute;
  transform: none;
  transform-origin: left top 0;
  background-image: url(../assets/home/download_btn.png);
  background-repeat: no-repeat;
  background-size: 3.39rem 1.43rem;
}
p.game_description {
  font-style: normal;
  color: #999;
  text-align: center;
  text-shadow: 0 0 0.1rem #000;
}
/* 新闻样式 */
.news_wrap {
  max-width: 12rem;
  margin: .8rem auto;
  padding: 0 .1rem;
  border-top: 1px solid rgba(255,255,255,.1);
}
.news_wrap .title_wrap {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  justify-content: space-between;
}
.news_wrap .title_wrap h3, .news_wrap .title_wrap h4 {
  margin: .3rem 0 .2rem;
  padding: 0;
  color: #fff;
  font-size: .24rem;
}
.news_wrap .title_wrap .more_news {
  margin: .3rem 0 .2rem;
  text-decoration: none;
  color: #9388aa;
  font-size: .2rem;
}
.title_wrap .more_news:hover {
  color: #fff;
}
.news_wrap .flex_news_item {
  display: flex;
  flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  justify-content: space-between;
}
/* 视频内容 */
.map_wrap {
  width: 100%;
  max-width: 19.2rem;
  margin: .5rem auto 0;
}
.map_wrap h2 {
  position: relative;
  height: .7rem;
  margin: 0;
  text-align: center;
  letter-spacing: .04rem;
  color: #fff;
  font-weight: 600;
  text-shadow: 0 0 0.1rem #000;
  font-size: .36rem;
}
.map_wrap h2 span {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: .5rem;
  height: .02rem;
  margin-left: -.25rem;
  background: #8074c5;
}
.map_wrap .map_content {
  padding-bottom: .6rem;
  background-image: url(../assets/home/map_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.map_wrap .map_description {
  margin: 0;
  padding: .3rem 0;
  text-align: center;
  color: #fff;
}
.map_wrap .map_video {
  width: 100%;
  margin: .6rem auto;
  position: relative;
  max-width: 10rem;
}
.map_wrap .map_video video {
  width: 100%;
}
.map_wrap .map_video .video_play_btn {
  background-size: auto;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: all ease .3s;
  text-indent: -99.99rem;
  background-color: rgba(0,0,0,.4);
  background-image: url(../assets/home/video_play_btn.png);
  background-repeat: no-repeat;
  background-position: center center;
}
.map_wrap .map_video .video_play_btn:hover {
  transition: all ease .3s;
  background-color: rgba(0,0,0,0);
}
/* 角色新闻内容 */
.heroes_wrap {
  padding-bottom: 1.4rem;
  background-image: url(../assets/home/heroes_bg.jpg);
  background-repeat: no-repeat;
  background-position: center 100%;
}
.flex_features_wrap {
  padding: .87rem 0 .5rem;
  flex-flow: row nowrap;
  display: flex;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.flex_features_wrap .features_item {
  width: 32%;
  margin: 0 .1rem;
  position: relative;
  display: flex;
  padding-bottom: .1rem;
  background-color: #15161c;
  flex-flow: column nowrap;
  justify-content: flex-end;
}
.flex_features_wrap .features_item .features_img {
  margin-top: -1.18rem;
  margin-bottom: -1.16rem;
  height: 708px;
  position: relative;
  width: 100%;
}
.flex_features_wrap .features_item .features_text {
  position: relative;
  padding: 0 .2rem .2rem;
  text-align: left;
}
.flex_features_wrap .features_item .features_text h2 {
  font-size: .48rem;
  color: #fccc84;
}
.flex_features_wrap .features_item .features_text h4 {
  text-align: left;
  letter-spacing: 0;
  font-size: .36rem;
  margin: -.14rem 0 .1rem;
  color: #fff;
}
</style>
