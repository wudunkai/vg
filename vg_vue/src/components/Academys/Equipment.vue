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
                <div class="flickity-viewport" style="height:420px;">
                  <div class="flickity-slider" :style="tran1">
                    <div class="page_items" style="left:0%; position: absolute;">
                      <div class="page_items_content">
                        <div class="image">
                          <img :src="equipmentimg[0].pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="itemBoots">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="equipment[0].items">
                      </div>
                    </div>
                    <div class="page_items" style="left:100%; position: absolute;">
                      <div class="page_items_content">
                        <div class="image">
                          <img :src="equipmentimg[1].pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="itemScoutTrap">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="equipment[1].items">
                      </div>
                    </div>
                    <div class="page_items" style="left:200%; position: absolute;">
                      <div class="page_items_content">
                        <div class="image">
                          <img :src="equipmentimg[2].pic">
                          <a href="javascript:void(0);" class="video_play_btn" @click="itemReflexBlock">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-html="equipment[2].items">
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
      items:[{title:"靴类",left:"left: 0%"},{title:"视野装备",left:"left: 11.67%"},{title:"格挡护腕",left:"left: 23.33%;"}],
      equipment:[{},{},{}],
      equipmentimg:[{},{},{}],
      tran:"transform: translateX(42.58%);",
      tran1:"transform: translateX(0%)",
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
      break;
      case 1:
        this.tran = "transform: translateX(32.5%)"
        this.tran1 = "transform: translateX(-100%)"
      break;
      default:
        this.tran = "transform: translateX(20.83%)"
        this.tran1 = "transform: translateX(-200%)"
      }
    },
    //靴类
    itemBoots(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/academy/equipment/videos_Academy_ItemBoots.zh.mp4"
    },
    //视野装备
    itemScoutTrap(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/academy/equipment/videos_Academy_ItemScoutTrap.zh.mp4"
    },
    //格挡护腕
    itemReflexBlock(){
      var myh = this.$refs.elememt.offsetHeight;
      var myw = this.$refs.elememt.offsetWidth;
      var h = myh+"px";
      var w = myw+"px";
      this.box = "height:" + h + ";" + "width:" + w ;
      this.myshow = "myshow";
      this.$refs.map.src = "http://127.0.0.1:3000/academy/equipment/videos_Academy_ItemReflexBlock.zh.mp4"
    },
    closebtn(){
      this.myshow = "";
      this.$refs.map.src = ""
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
    var url = "Academy/equipment"
    this.axios.get(url).then(result => {
      this.equipment=result.data.data;
    })
    var url = "Academy/equipmentimg"
    this.axios.get(url).then(result=>{
      this.equipmentimg=result.data.data
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