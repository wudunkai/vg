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
                      <div class="page_items_content" v-html="mode[0].items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs) of modeimg.slice(0,3)" :key="imgs">
                        <div class="image">
                          <img :src="item.pic">
                          <p class="title">{{item.textp}}</p>
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                    </div>
                    <div class="page_items" style="left:100%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(3,5)" :key="'-label1'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(1,3)" :key="'-label2'+index1" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs2) of modeimg.slice(5,7)" :key="'-label3'+imgs2">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index2) of mode.slice(3,5)" :key="'-label4'+index2" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs3) of modeimg.slice(7,9)" :key="'-label5'+imgs3">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index3) of mode.slice(5,7)" :key="'-label6'+index3" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs3) of modeimg.slice(9,13)" :key="'-label7'+imgs3">
                        <div class="image">
                          <img :src="item.pic">
                          <p class="title">{{item.textp}}</p>
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(13,15)" :key="'-label8'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(7,9)" :key="'-label9'+index1" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(15,17)" :key="'-label10'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(9,11)" :key="'-label11'+index1" v-html="item.items">
                      </div>
                    </div>
                    <div class="page_items" style="left:200%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(17,18)" :key="'-label1'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content">
                        <div class="image">
                          <div class="image-img" v-for="(item,imgs) of modeimg.slice(18,20)" :key="imgs" v-show="imgs===mark">
                            <img :src="item.pic">
                          </div>
                          <ol class="image-ol">
                            <li :class="{'active':imgs===mark}" v-for="(item,imgs) of modeimg.slice(18,20)" :key="imgs"></li>
                          </ol>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(11,13)" :key="'-label3'+index1" v-html="item.items">
                      </div>

                      <div class="page_items_content">
                        <div class="image">
                          <div class="image-img" v-for="(item,imgs) of modeimg.slice(20,23)" :key="imgs" v-show="imgs===mark1">
                            <img :src="item.pic">
                          </div>
                          <ol class="image-ol">
                            <li :class="{'active':imgs===mark1}" v-for="(item,imgs) of modeimg.slice(20,23)" :key="imgs"></li>
                          </ol>
                        </div>
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(23,24)" :key="'-label5'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(13,15)" :key="'-label6'+index1" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(24,26)" :key="'-label7'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(15,17)" :key="'-label8'+index1" v-html="item.items">
                      </div>
                      <div class="page_items_content">
                        <div class="image">
                          <div class="image-img" v-for="(item,imgs) of modeimg.slice(26,28)" :key="imgs" v-show="imgs===mark">
                            <img :src="item.pic">
                          </div>
                          <ol class="image-ol">
                            <li :class="{'active':imgs===mark}" v-for="(item,imgs) of modeimg.slice(26,28)" :key="imgs"></li>
                          </ol>
                        </div>
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(28,29)" :key="'-label10'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(17,19)" :key="'-label11'+index1" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(29,30)" :key="'-label12'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(19,20)" :key="'-label13'+index1" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(30,31)" :key="'-label14'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(20,21)" :key="'-label15'+index1" v-html="item.items">
                      </div>
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(31,32)" :key="'-label16'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(21,22)" :key="'-label17'+index1" v-html="item.items">
                      </div>
                    </div>
                    <div class="page_items" style="left:300%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(32,33)" :key="'-label1'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(22,23)" :key="'-label2'+index1" v-html="item.items">
                      </div>
                    </div>  
                    <div class="page_items" style="left:400%; position: absolute;">
                      <div class="page_items_content"  v-for="(item,imgs1) of modeimg.slice(33)" :key="'-label1'+imgs1">
                        <div class="image">
                          <img :src="item.pic">
                          <a href="javascript:void(0);" class="video_play_btn">播放</a>
                        </div>
                      </div>
                      <div class="page_items_content" v-for="(item,index1) of mode.slice(23)" :key="'-label12'+index1" v-html="item.items">
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
      items:[{title:"玩法总览",left:"left: 0%"},{title:"5V5模式",left:"left: 11.67%"},{title:"3V3模式",left:"left: 23.33%;"},{title:"极限乱斗",left:"left: 35%;"},{title:"闪电战",left:"left: 46.67%;"}],
      mode:[{},{}],
      modeimg:[{},{}],
      tran:"transform: translateX(44.08%);",
      tran1:"transform: translateX(0%);",
      heig:"height: 853px;",
      selected:"",
      mark: 0,
      mark1: 0
    }
  },
  methods: {
    getmo(index){
      this.selected = index
      switch (index){
      case 0:
        this.tran = "transform: translateX(44.08%)"
        this.tran1 = "transform: translateX(0%)"
        this.heig = "height: 853px;"
      break;
      case 1:
        this.tran = "transform: translateX(32.33%)"
        this.tran1 = "transform: translateX(-100%)"
        this.heig = "height: 3996px;"
      break;
      case 2:
        this.tran = "transform: translateX(20.67%)"
        this.tran1 = "transform: translateX(-200%)"
        this.heig = "height: 4080px;"

      break;
      case 3:
        this.tran = "transform: translateX(9%)"
        this.tran1 = "transform: translateX(-300%)"
        this.heig = "height: 420px;"
      break; 
      default:
        this.tran = "transform: translateX(0%)"
        this.tran1 = "transform: translateX(-400%)"
        this.heig = "height: 420px;"
      }
    },
    autoPlay(){
      this.mark++;
      if(this.mark === 2){
        this.mark = 0
      }
      this.mark1++;
      if(this.mark1 === 3){
        this.mark1 = 0
      }
    },
    play(){
      setInterval(this.autoPlay,2500)
    },
    change(i){
      this.mark = i
      this.mark1 = i
    }
  },
  created() {
    this.play()
    var url = "Academy/mode"
    this.axios.get(url).then(result => {
      this.mode=result.data.data;
    })
    var url = "Academy/modeimg"
    this.axios.get(url).then(result=>{
      this.modeimg=result.data.data
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
.image-img {
  width: 100%;
  display: inline-block;
  margin-bottom: .2rem;
  min-height: 3.8rem;
  position: absolute;
  overflow: hidden;
}
.image-ol {
  bottom: .15rem;
  text-align: right;
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
}
.image-ol li {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 8px;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255,255,255,.2); 
}
.active {
  background: rgba(255,255,255,.8) !important;
}
</style>