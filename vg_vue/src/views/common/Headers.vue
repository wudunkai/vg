<template>
  <div :style="nav == true ? 'position: fixed; max-width: 100%; top: 0px;': ''" class="nav">
    <div class="nav_content">
      <div class="nav_left_arrow"></div>
      <a href="/" class="vg_logo">网站首页</a>
      <ul class="flex_nav_list">
        <li>
          <a @click="goTo('/home')" :class="{active:'/home'===$route.path}">首页
            <span class="light_line"></span>
          </a>
        </li>
        <li>
          <a @click="goTo('/news')" :class="{active:'/news'===$route.path}">新闻
            <span class="light_line"></span>
          </a>
        </li>        
        <li>
          <a @click="goTo('/heroes')" :class="{active:'/heroes'===$route.path}">英雄
            <span class="light_line"></span>
          </a>
        </li>
        <li>
          <a @click="goTo('/events/crossplatform')" :class="{active:'/events/crossplatform'===$route.path}">PC端测试
            <span class="light_line" id="pcalpha"></span>
          </a>
        </li>
        <li>
          <a @click="goTo('/academy')" :class="{active:'/academy' === $route.path || '/academy/mode' === $route.path || '/academy/advance' === $route.path || '/academy/equipment' === $route.path}">学院
            <span class="light_line"></span>
          </a>
        </li>
        <li class="has-menu" @mouseover="menuOver"
        @mouseleave="menuLeave">
          <a href="javascript:;" :class="{active:'/events/signuprules' === $route.path || '/events/signupanchor' === $route.path}">电竞报名
            <span class="light_line" id="signup"></span>
          </a>
          <span class="arrow" :style="trans"></span>
          <div class="menu_wrap" :style="visible">
            <a @click="goTo('/events/signuprules')" class="menu">战队参赛通道</a>
            <a @click="goTo('/events/signupanchor')" class="menu">主播解说通道</a>
          </div>
        </li>
      </ul>
      <ul class="sub_nav_list">
        <li>
          <a href="javascript:void(0);" target="_blank" class="support" @mouseover="supOver"
      @mouseleave="supLeave">客服支持</a>
          <img class="nav_support" src="http://127.0.0.1:3000/common/download.png" :style="sup">
        </li>
        <li>
          <router-link to="/download" class="download ">
            <span>游戏下载</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: "",
      trans: "",
      sup: "",
      nav: ""
    }
  },
  methods: {
    goTo(path){
      this.$router.push(path)
    },
    //移入
    menuOver:function(){
      this.visible = "visibility: visible";
      this.trans = "transform: rotateZ(180deg)"
    },
    //移出
    menuLeave:function(){
      this.visible = "";
      this.trans = ""
    },
    //移入
    supOver:function(){
      this.sup = "display:block";
    },
    //移出
    supLeave:function(){
      this.sup = "";
    },
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.scrollTop;
      scrollTop >= 60 ? this.nav = true : this.nav = false;
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
.nav {
  height: .66rem;
  top: 0.4rem;
  width: 100%;
  max-width: 14rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  border-top: 1px solid #343651;
  border-bottom: 1px solid #000;
  background: linear-gradient(#242635,#171926,#131625);
}
.nav .nav_left_arrow {
  width: 2rem;
  height: .67rem;
  position: absolute;
  top: -1px;
  left: -.5rem;
  transform: skewX(20deg);
  border-top: 1px solid #343651;
  border-bottom: 1px solid #000;
  background: linear-gradient(#242635,#171926,#131625);
}
.nav .vg_logo {
  width: 2.02rem;
  height: 1.5rem;
  left: -.22rem;
  top: -.13rem;
  position: absolute;
  text-indent: -99.99rem;
  overflow: hidden;
  background-size: 100% auto;
  background-image: url(../../assets/landing/vg_logo.png);
  background-position: 0 0;
  background-repeat: no-repeat;
}
.nav ul.flex_nav_list {
  margin: 0 0 0 2.5rem;
  position: relative;
  top: -.01rem;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.nav ul.sub_nav_list {
  right: -.5rem;
  position: absolute;
  top: -.01rem;
  margin: 0;
}
.nav ul.sub_nav_list li a:hover {
  color: #fff;
  transition: color ease .3s;
}
.nav ul.flex_nav_list li a {
  height: .68rem;
  line-height: .68rem;
  padding: 0 .4rem;
  display: block;
  text-align: center;
  position: relative;
  font-size: .18rem;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  transition: all ease .3s;
}
.nav ul.flex_nav_list li a.active, .nav ul.flex_nav_list li a:hover {
  text-shadow: 0 0 0.2rem #8317b5, 0 0 0.2rem #8317b5;
  transition: all ease .3s;
}
.nav ul.flex_nav_list li a span.light_line {
  left: .07rem;
  width: 1.05rem;
  height: .05rem;
  display: block;
  position: absolute;
  bottom: -.04rem;
  opacity: 0;
  background-size: 100% auto;
  transition: opacity ease .3s;
  background-image: url(../../assets/common/nav_light_line.png);
  background-repeat: no-repeat;
}
#pcalpha {
  left: .33rem;
}
.nav ul.flex_nav_list li a.active .light_line, .nav ul.flex_nav_list li a:hover .light_line {
  opacity: 1;
  transition: opacity ease .3s;
}
.nav .has-menu {
  position: relative;
}
.nav .arrow {
  position: absolute;
  top: .3rem;
  right: .1rem;
  width: .22rem;
  height: .12rem;
  margin-left: .05rem;
  background-image: url(../../assets/common/arrow.png);
  background-repeat: no-repeat;
  transition: all .3s ease;
}
.nav .menu_wrap {
  visibility: hidden;
  padding-top: .1rem;
  width: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  border-bottom-left-radius: .1rem;
  border-bottom-right-radius: .1rem;
  position: absolute;
  right: -.3rem;
  z-index: 1002;
  background: rgba(0,0,0,.7);
}
.nav .menu_wrap .menu {
  height: .4rem;
  line-height: .4rem;
  color: #fff;
  display: block;
  margin-bottom: .1rem;
  padding-bottom: .1rem;
  border-bottom: 1px solid hsla(0,0%,100%,.1);
  transition: all 0s ease;
}
.nav .menu_wrap .menu:last-child {
  border: none;
}
#signup {
  left: .29rem;
}
.nav ul.sub_nav_list li {
  display: inline-block;
}
.nav ul.sub_nav_list li a {
  width: 1.2rem;
  height: .68rem;
  line-height: .68rem;
  display: block;
  text-align: center;
  position: relative;
  font-size: .16rem;
  text-decoration: none;
  font-weight: 600;
  color: #6e7181;
  transition: color ease .3s;
}
.nav ul.sub_nav_list li a.support {
  background-repeat: no-repeat;
  background-position: 0 center;
}
.nav ul.sub_nav_list li a.download {
  width: 2rem;
  height: .66rem;
  font-size: .18rem;
  color: #fff;
  transform: skewX(-20deg);
  border-top: 1px solid #e086f7;
  border-bottom: 1px solid #590366;
  background: linear-gradient(#e04ef1,#b42dc8,#800697);
  line-height: .68rem;
}
.nav_support {
  display: none;
  position: absolute;
  top: 68px;
  left: -21px;
}
.nav ul.sub_nav_list li a.download span {
  transform: skewX(20deg);
  display: block;
  width: 100%;
  height: 100%;
}
</style>
