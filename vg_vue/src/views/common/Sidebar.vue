<template>
  <div id="sideBar">
    <a href="#" target="_blank" class="taptop">
      <div class="weibo_icon"></div>
      <p>微博</p>
    </a>
    <a href="#" target="_blank" class="taptop">
      <div class="taptop_icon"></div>
      <p>TapTap</p>
    </a>
    <a href="#" class="weix" @mouseover="weixOver"
      @mouseleave="weixLeave">
      <div class="weix_icon">
        <div class="weix_open">
          <img src="../../assets/sidebar/weix.jpg" :style="active1">
        </div>
      </div>
      <p>微信</p>
    </a>
    <div class="qq" @mouseover="qqOver"
      @mouseleave="qqLeave" :style="active4">
      <div class="qq_close" :style="active3">
        <div class="qq_icon"></div>
        <p>QQ群</p>
      </div>
      <div class="qq_open" :style="active2">
        <p>手机端<br /><span>QQ扫码</span></p>
        <div class="qq_code"></div>   
        <div class ="bar_code">
          <img  src="../../assets/sidebar/vgqq.png">
        </div>
        <div class="line"></div>
        <p>电脑端<br /><span>点击进群</span></p>
        <a href="#" target="_blank" class="qq_icon"></a>
      </div>
    </div>
    <a href="#" target="_blank" class="taptop">
      <div  class="baidu_icon"></div>
      <p>贴吧</p>
    </a>
    <a href="#" target="_blank" class="taptop">
      <div  class="buluo_icon"></div>
      <p>兴趣部落</p>
    </a>
    <a href="javascript:void(0)" @click="toptop" class="gotop" :style="top == true ? 'display:block' : ''"></a>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      active1: "display:none",
      active2: "",
      active3: "",
      active4: "",
      top: "",
    }
  },
  methods: {
    //移入
    toptop:function(){
      let target =0;
      clearInterval(timer);
      let timer = setInterval(() => {
        target = document.body.scrollTop || document.documentElement.scrollTop;
        target -= Math.ceil(target/20);//做减速运动
        window.scrollTo(0, target);
        if (target == 0) {
          clearInterval(timer);
        }
      }, 5);  
    },
    //移入
    weixOver:function(){
      this.active1 = "display:block";
    },
    //移出
    weixLeave:function(){
      this.active1 = "display:none";
    },
    //移入
    qqOver:function(){
      this.active2 = "display:block";
      this.active3 = "display:none";
      this.active4 = "height:3.35rem"
    },
    //移出
    qqLeave:function(){
      this.active2 = "";
      this.active3 = "display:block";
      this.active4 = ""
    },
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.scrollTop;
      scrollTop >= 100 ? this.top = true : this.top = false;
    },
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style scoped>
#sideBar {
  position: fixed;
  z-index: 10000;
  top: 30%;
  right: .1rem;
}
#sideBar .taptop, #sideBar .weix {
  position: relative;
  display: block;
  width: .86rem;
  height: .86rem;
  margin-bottom: .1rem;
  border-radius: .86rem;
  background: #484351;
}
#sideBar .qq {
    position: relative;
    width: .86rem;
    height: .86rem;
    margin-bottom: .1rem;
    transition: all ease .3s;
    border-radius: .86rem;
    background: #484351;
}
#sideBar .gotop {
    position: relative;
    display: none;
    width: .86rem;
    height: .86rem;
    border-radius: 100%;
    background-color: #484351;
    background-image: url(../../assets/sidebar/qq.png);
    background-repeat: no-repeat;
    background-position: -2.27rem .1rem;
    background-size: 2.87rem .68rem;
}
#sideBar .taptop .weibo_icon {
  position: relative;
  display: block;
  margin: 0 auto;
  width: .6rem;
  height: .5rem;
  background-repeat: no-repeat;
  background-image: url(../../assets/sidebar/tap.png);
  background-position: 0 .12rem;
}
#sideBar .taptop .taptop_icon {
  position: relative;
  display: block;
  margin: 0 auto;
  width: .6rem;
  height: .5rem;
  background-repeat: no-repeat;
  background-image: url(../../assets/sidebar/tap.png);
  background-position: 0 -.5rem;
}
#sideBar .weix .weix_icon {
  position: relative;
  display: block;
  margin: 0 auto;
  width: .6rem;
  height: .5rem;
  background-repeat: no-repeat;
  background-image: url(../../assets/sidebar/tap.png);
  background-position: 0 -1.2rem;
}
#sideBar .weix .weix_open {
  position: relative;
  left: -2.2rem;
  width: 2rem;
}
#sideBar img {
  max-width: none;
  width: 100%;
}
#sideBar .qq .qq_close .qq_icon {
  top: .1rem;
}
#sideBar .qq .qq_icon {
  width: .6rem;
  height: .5rem;
  background-position: -1.26rem -.14rem;
}
#sideBar .qq .qq_code, #sideBar .qq .qq_icon {
  position: relative;
  display: block;
  margin: 0 auto;
  background-image: url(../../assets/sidebar/qq.png);
  background-repeat: no-repeat;
  background-size: 2.87rem .68rem;
}
#sideBar .qq .qq_open {
  display: none;
  padding-top: .4rem;
}
#sideBar .qq p, #sideBar .taptop p, #sideBar .weix p {
  font-size: .14rem;
  padding: .04rem 0;
  text-align: center;
  color: #fff;
}
#sideBar .qq p span {
  color: #fccc84;
}
#sideBar .qq .qq_code {
  width: .68rem;
  height: .68rem;
  background-position: 0 0;
}
#sideBar .qq .bar_code {
  position: absolute;
  top: 30px;
  left: -183px;
  width: 180px;
}
#sideBar .qq .qq_open .line {
  width: 90%;
  height: .01rem;
  margin: .2rem auto;
  background: #393541;
}
#sideBar .taptop .baidu_icon {
  position: relative;
  display: block;
  margin: 0 auto;
  width: .6rem;
  height: .5rem;
  background-repeat: no-repeat;
  background-image: url(../../assets/sidebar/tap.png);
  background-position: 0 -2rem;
}
#sideBar .taptop .buluo_icon {
  position: relative;
  display: block;
  margin: 0 auto;
  width: .6rem;
  height: .5rem;
  background-repeat: no-repeat;
  background-image: url(../../assets/sidebar/tap.png);
  background-position: 0 -2.61rem;
}
#sideBar .gotop {
  position: relative;
  display: none;
  width: .86rem;
  height: .86rem;
  border-radius: 100%;
  background-color: #484351;
  background-image: url(../../assets/sidebar/qq.png);
  background-repeat: no-repeat;
  background-position: -2.27rem .1rem;
  background-size: 2.87rem .68rem;
}
#sideBar a:hover {
  background-color: #686173;
}
</style>
