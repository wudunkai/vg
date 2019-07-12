<template>
  <div class="wrapper" ref="elememt">
    <div class="main">
      <headers></headers>
      <sidebar></sidebar>
      <div class="academy_top">
        <div class="academy_bot">
          <div class="academy_main">
            <div class="header">
              <h2>《虚荣》学院</h2>
              <p>欢迎来到学院：一个能帮助您了解《虚荣》的知识库。</p>
            </div>
            <college></college>
            <div class="page">
              <div class="child-nav-wrap">
                <ul class="child-nav">
                  <div class="flickity-viewport">
                    <div class="flickity-slider" :style="tran">
                      <li v-for="(item,index) of items" :class="selected == index ? 'selected' : '' " :style="item.left" :key="index" @click="getmo(index)">{{item.title}}<span></span></li>
                    </div>
                  </div>
                </ul>
              </div>
              <div class="page_contain">
                <div class="flickity-viewport" :style="heig">
                  <div class="flickity-slider" :style="tran1">
                    <div class="page_items" style="left:0%; position: absolute;">
                      <div class="page_items_content">
                        <div class="image">
                          <img :src="academyimg[0].pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="gameView">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="academy[0].items">
                      </div>
                      <div class="page_items">
                        <div class="page_items_content"  v-for="(item,imgs) of academyimg.slice(1,5)" :key="imgs">
                          <div class="image">
                            <img :src="item.pic">
                            <p class="title">{{item.textp}}</p>
                            <a href="javascript:void(0);" class="video_play_btn" @click="goto(imgs)">播放</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="page_items" style="left:100%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs) of academyimg.slice(5,7)" :key="imgs">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="goto1(imgs)">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="academy[2].items">
                      </div>
                      <div class="page_items_content" v-html="academy[3].items">
                      </div>
                    </div>
                    <div class="page_items" style="left:200%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs) of academyimg.slice(7,8)" :key="imgs">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="basicMoney">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="academy[4].items"> 
                      </div>
                    </div>
                    <div class="page_items" style="left:300%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs) of academyimg.slice(8)" :key="imgs">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content" v-html="academy[5].items">
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>  
    </div>
    <footers></footers> 
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
import Headers from '../../views/common/Headers'
import Sidebar from '../../views/common/Sidebar'
import Footers from '../../views/common/Footers'
import College from '../../views/common/College'
export default {
  data() {
    return {
      items:[{title:"游戏基础",left:"left: 0%"},{title:"保护自己",left:"left: 11.67%"},{title:"赚取金币",left:"left: 23.33%;"},{title:"商城介绍",left:"left: 35%;"}],
      academy:[{},{},{},{},{},{}],
      academyimg:[{}],
      tran:"transform: translateX(42.58%);",
      tran1:"transform: translateX(0%)",
      heig:"height: 1273px;",
      box:"",
      pop:"",
      myshow:"",
      selected:""
    }
  },
  methods: {
    getmo(index){
      this.selected = index
      switch (index){
      case 0:
        this.tran = "transform: translateX(42.58%)"
        this.tran1 = "transform: translateX(0%)"
        this.heig = "height: 1273px;"
      break;
      case 1:
        this.tran = "transform: translateX(32.5%)"
        this.tran1 = "transform: translateX(-100%)"
        this.heig = "height: 690px;"
      break;
      case 2:
        this.tran = "transform: translateX(20.83%)"
        this.tran1 = "transform: translateX(-200%)"
        this.heig = "height: 420px;"
      break;
      default:
        this.tran = "transform: translateX(9.17%)"
        this.tran1 = "transform: translateX(-300%)"
        this.heig = "height: 420px;"
      }
    },
    closebtn(){
      this.myshow = "";
      this.$refs.map.src = ""
    },
    //游戏开始
    gameView(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_view.mp4"
    },
    //必备开始
    goto(imgs){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      switch (imgs){
      case 0:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_Academy_Choice_Hero_2.zh.mp4"
      break;
      case 1:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_Academy_Basic_Move_.mp4"
      break;
      case 2:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_Academy_Basic_Abilities_v002.zh.mp4"
      break;
      default:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_Academy_Basic_Winning_v002.zh.mp4"
      }
    },
    //对抗炮塔 摧毁炮塔
    goto1(imgs){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      switch (imgs){
      case 0:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_Academy_Int_Aggro.zh.mp4"
      break;
      default:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_Academy_Int_Barrier.zh.mp4"
      }
    },
    //获取金币
    basicMoney(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/academy/academy/videos_Academy_Basic_Money_v002.zh.mp4"
    },
    tl(){
      var width = document.documentElement.clientWidth;
      var t = 0 + "px";
      var l = width*0.1 + "px";
      this.pop = "top:" + t + ";" + "left:" + l ;
    }
  },
  created() {
    this.tl()
    var url = "Academy/academy"
    this.axios.get(url).then(result => {
      this.academy=result.data.data;
    })
    var url = "Academy/academyimg"
    this.axios.get(url).then(result=>{
      this.academyimg=result.data.data
    })
  },
  components:{
    "headers":Headers,
    "sidebar":Sidebar,
    "footers":Footers,
    "college":College,
  },    
}
</script>
<style scoped>
</style>
