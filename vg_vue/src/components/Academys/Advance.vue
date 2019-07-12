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
                          <img :src="advanceimg[0].pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="intAmbient">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="advance[0].items">
                      </div>
                    </div>
                    <div class="page_items" style="left:100%; position: absolute;">
                      <div class="page_items_content">
                        <div class="image">
                          <img :src="advanceimg[1].pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="intOverdrive">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="advance[1].items">
                      </div>
                    </div>
                    <div class="page_items" style="left:200%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs1) of advanceimg.slice(2,10)" :key="imgs1">
                        <div class="image">
                          <img :src="item.pic">
                          <p class="title">{{item.textp}}</p>
                          <a href="javascript:void(0);" class="video_play_btn" @click="goto1(imgs1)">播放</a>
                        </div>
                      </div>
                    </div>
                    <div class="page_items" style="left:300%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs2) of advanceimg.slice(10,12)" :key="imgs2">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="goto2(imgs2)">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of advance.slice(2,4)" :key="'-label'+index1" v-html="item.items">
                      </div>
                    </div>  
                    <div class="page_items" style="left:400%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs3) of advanceimg.slice(12)" :key="imgs3">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="goto3(imgs3)">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index2) of advance.slice(4)" :key="'-label'+index2" v-html="item.items">
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
      items:[{title:"赚取额外金币",left:"left: 0%"},{title:"技能满级",left:"left: 11.83%"},{title:"资源与增益",left:"left: 23.5%;"},{title:"伏击与对线",left:"left: 35.17%;"},{title:"团队合作",left:"left: 46.83%;"}],
      advance:[{},{}],
      advanceimg:[{},{}],
      tran:"transform: translateX(44.08%);",
      tran1:"transform: translateX(0%);",
      heig:"height: 420px;",
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
        this.tran = "transform: translateX(44.08%)"
        this.tran1 = "transform: translateX(0%)"
        this.heig = "height: 420px;"
      break;
      case 1:
        this.tran = "transform: translateX(32.33%)"
        this.tran1 = "transform: translateX(-100%)"
        this.heig = "height: 420px;"
      break;
      case 2:
        this.tran = "transform: translateX(20.67%)"
        this.tran1 = "transform: translateX(-200%)"
        this.heig = "height: 1680px;"

      break;
      case 3:
        this.tran = "transform: translateX(9%)"
        this.tran1 = "transform: translateX(-300%)"
        this.heig = "height: 612px;"
      break; 
      default:
        this.tran = "transform: translateX(0%)"
        this.tran1 = "transform: translateX(-400%)"
        this.heig = "height: 660px;"
      }
    },
    closebtn(){
      this.myshow = "";
      this.$refs.map.src = ""
    },
    //获取额外金币
    intAmbient(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Int_Ambient.zh.mp4"
    },
    //技能满级
    intOverdrive(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Int_Overdrive.zh.mp4"
    },
    //资源与增益
    goto1(imgs1){
      console.log(imgs)
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      switch (imgs){
      case 0:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Int_Ace.zh.mp4"
      break;
      case 1:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Int_Sentry.zh.mp4"
      break;
      case 2:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Int_Miner.zh.mp4"
      break;
      case 3:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Int_Kraken.zh.mp4"
      break;
      case 4:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Minions.zh (1).mp4"
      break;
      case 5:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Jungle.zh.mp4"
      break;
      case 6:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_JungleMonsters.zh.mp4"
      break;
      default:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_JungleLeashing.zh.mp4"
      }
    },
    //伏击与对线
    goto2(imgs2){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      switch (imgs){
      case 0:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Vision.zh.mp4"
      break;
      default:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Lane.zh.mp4"
      }
    },
    //团队合作
    goto3(imgs3){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      switch (imgs){
      case 0:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_TheMeta.zh.mp4"
      break;
      default:
        this.$refs.map.src = "http://127.0.0.1:3000/academy/advance/videos_Academy_Scoreboard.zh.mp4"
      }
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
    var url = "Academy/advance"
    this.axios.get(url).then(result => {
      this.advance=result.data.data;
    })
    var url = "Academy/advanceimg"
    this.axios.get(url).then(result=>{
      this.advanceimg=result.data.data
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
