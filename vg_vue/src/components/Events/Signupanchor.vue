<template>
  <div class="wrapper">
    <div class="main" >
      <headers></headers>
      <sidebar></sidebar>
      <div class="news_top m-signup m-anchor">
        <div class="news_bot">
          <div class="news_main">
            <p class="title"><span class="major">填写申请信息</span><span class="explain">（<em>*</em>为必填项）</span></p>
            <form class="team">
              <ul class="info">
                  <li>
                    <label>昵称：</label>
                    <input v-model="nickName" type="text" maxlength="4" class="valid top" :style="border" placeholder="请输入真实姓名">
                    <span class="mark">*</span>
                  </li>
                  <li>
                    <label>性别：</label>
                    <div class="sex-wrapper">
                      <input type="radio" v-model="sex" value="男"/>
                      <span>男</span>
                      <input type="radio" v-model="sex" value="女"/>
                      <span>女</span>
                    </div>
                    <span class="mark">*</span>
                  </li>
                  <li>
                    <label>联系电话：</label>
                    <input v-model="contact" type="text" maxlength="11" class="valid top" :style="border" placeholder="请输入手机号码">
                    <span class="mark">*</span>
                  </li>
                  <li>
                    <label>联系QQ：</label><input v-model="qq" type="text" maxlength="14" class="valid top" :style="border">
                    <span class="mark">*</span>
                  </li>
                  <li>
                    <label>直播平台：</label>
                    <input v-model="platform" type="text" maxlength="64" class="valid top" :style="border">
                    <span class="mark">*</span>
                  </li>
                  <li>
                    <label>方便直播时间：</label>
                    <div class="time">
                      <div class="line">
                        <span class="separate">
                          <input type="checkbox" id="workingday" v-model="isworkingday"/>
                          <label for="workingday">工作日安排</label>
                        </span>
                        <span class="separate">
                          <input type="text" maxlength="14" placeholder="格式如：16:25" v-bind:disabled="!isworkingday"
                          v-model="workingdayBegin"/>
                        </span>
                        <span class="separate">
                          <span>到</span>
                        </span>
                        <span class="separate">
                          <input type="text" maxlength="14" placeholder="格式如：16:25" v-bind:disabled="!isworkingday" v-model="workingdayEnd"/>
                        </span>
                      </div>
                      <div class="line">
                        <span class="separate">
                          <input type="checkbox" id="weekendday" v-model="isweekendday"/>
                          <label for="weekendday">周末日安排</label>
                        </span>
                        <span class="separate">
                          <input type="text" maxlength="14" placeholder="格式如：16:25" v-bind:disabled="!isweekendday" v-model="weekenddayBegin"/>
                        </span>
                        <span class="separate">
                          <span>到</span>
                        </span>
                        <span class="separate">
                          <input type="text" maxlength="14" placeholder="格式如：16:25" v-bind:disabled="!isweekendday" v-model="weekenddayEnd"/>
                        </span>
                      </div>
                      <div class="line">
                        <span class="separate">
                          <input type="checkbox" id="holiday" v-model="isholiday"/>
                          <label for="holiday">节假日安排</label>
                        </span>
                        <span class="separate">
                          <input type="text" maxlength="14" placeholder="格式如：16:25" v-bind:disabled="!isholiday" v-model="holidayBegin"/>
                        </span>
                        <span class="separate">
                          <span>到</span>
                        </span>
                        <span class="separate">
                          <input type="text" maxlength="14" placeholder="格式如：16:25" v-bind:disabled="!isholiday" v-model="holidayEnd"/>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <label>直播间地址：</label>
                    <input v-model="liveTelecastRoom" type="text" maxlength="128" class="valid top" :style="border">
                    <span class="mark">*</span>
                  </li>
                  <li>
                    <label>相关直播视频：</label>
                    <input v-model="videoUrl" type="text" maxlength="128" class="valid top">
                    <span class="mark" style="visibility: hidden;">*</span>
                  </li>
                  <li>
                    <label>简要自我介绍：</label>
                    <textarea id="selfIntroduction" v-model="selfIntroduction" type="text" maxlength="128" class="valid" :style="border"></textarea>
                    <span class="mark">*</span>
                  </li>
                </ul>
            </form>
            <div class="submit-wrap">
              <a href="javascript:;" @click="login" class="submit">提交信息</a>
            </div>
          </div>
        </div>
      </div>
      <div class="layer" :style="show">
        <section class="wrapper">
          <p class="title">信息核对</p>
          <section class="layer-data-wrapper">
            <ul class="myul">
              <li>昵称:{{x1}}</li>
              <li>性别:{{x2}}</li>
              <li>联系电话:{{x3}}</li>
              <li>联系QQ:{{x4}}</li>
              <li>直播平台:{{x5}}</li>
              <li>方便直播时间:{{x6}}</li>
              <li>直播间地址:{{x7}}</li>
              <li>相关直播视频:{{x8}}</li>
              <li>简要自我介绍:{{x9}}</li>
            </ul>
          </section>
          <section class="footer">
            <div>
              <a class="confirm" @click="btn">确认提交</a>
              <a class="cancel" @click="hide">返回修改</a>
              <p class="confirm-tip">请仔细确认信息，提交后仅可修改一次</p>
            </div>
          </section>
        </section>
      </div>
      <div class="layer-window" :style="succ">
        <section class="wrapper">
          <a class="close" @click="success"></a>
          <div class="icon ok"></div>
          <p class="tip">恭喜你，提交成功</p>
          <p class="tip2">信息提交截止后，通过初步审核的小伙伴，工作人员将通过您留下的联系QQ与您进一步沟通哦~</p>
          <a href="#/home" class="confirm">返回首页</a>
        </section>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import Headers from '../../views/common/Headers'
import Sidebar from '../../views/common/Sidebar'
import Footers from '../../views/common/Footers'
export default {
  data() {
    return {
      nickName:"",
      sex:"",
      contact:"",
      qq:"",
      platform:"",
      isworkingday:false,workingdayBegin:"",workingdayEnd:"",
      isweekendday:false,weekenddayBegin:"",weekenddayEnd:"",
      isholiday:false,holidayBegin:"",holidayEnd:"",
      liveTelecastRoom:"",
      videoUrl:"",
      selfIntroduction:"",
      border:"",
      show:"",
      succ:"display:none",
      xinxi:"",
      x1:"",x2:"",x3:"",x4:"",x5:"",x6:"",x7:"",x8:"",x9:""
    }
  },
  methods: {
    login(){
      var n = this.nickName;
      var x = this.sex;
      var c = this.contact;
      var q = this.qq;
      var p = this.platform;
      var w = "工作日安排:"+this.workingdayBegin+"到"+this.workingdayEnd+";"+
      "周末日安排:"+this.weekenddayBegin+"到"+this.weekenddayEnd+";"+
      "节假日安排:"+this.holidayBegin+"到"+this.holidayEnd+";";
      var l = this.liveTelecastRoom;
      var v =this.videoUrl;
      var s = this.selfIntroduction;
      var nreg = /^[\u4e00-\u9fa5]{2,4}$/;
      var creg = /^1[3-8]\d{9}$/;
      var qreg = /^\d{6,14}$/
      if(nreg.test(n)&&creg.test(c)&&qreg.test(q)&&p&&l&&s){
        this.show = "display:block";
        this.x1 = n;
        this.x2 = x;
        this.x3 = c;
        this.x4 = q;
        this.x5 = p;
        this.x6 = w;
        this.x7 = v;
        this.x8 = l;
        this.x9 = s;
      }
      if(!nreg.test(n)||!x||!creg.test(c)||!qreg.test(q)||!p||!l||!s){
        this.border = "border-color: red"
      }else{
        this.border = "";
      }
    },
    hide(){
      this.show = "" 
    },
    btn(){
      this.show = ""
      var url = "Regs"
      var n = this.nickName;
      var x = this.sex;
      var c = this.contact;
      var q = this.qq;
      var p = this.platform;
      var w = "工作日安排:"+this.workingdayBegin+"到"+this.workingdayEnd+";"+
      "周末日安排:"+this.weekenddayBegin+"到"+this.weekenddayEnd+";"+
      "节假日安排:"+this.holidayBegin+"到"+this.holidayEnd+";";
      var l = this.liveTelecastRoom;
      var v =this.videoUrl;
      var s = this.selfIntroduction;
      var params = 'nickName='+n+'&sex='+x+'&contact='+c+'&qq='+q+'&platform='+p+'&timing='+w+'&liveTelecastRoom='+l+'&videoUrl='+v+'&selfIntroduction='+s;
      this.axios.post(url,params).then(result => {
        this.succ = "display:block";
      })
      .catch(error => {
        console.log(error);
      });
    },
    success(){
      this.succ = "display:none"
    }
  },
  components:{
    "headers":Headers,
    "sidebar":Sidebar,
    "footers":Footers,
  },
}
</script>
<style scoped>
.news_main {
  max-width: 12.83rem;
}
button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
}
.title {
  color: #fccc84;
  padding-left: .12rem;
  line-height: 100%;
}
.major {
  font-size: .2rem;
  font-weight: 700;
}
.explain {
  font-size: .16rem;
}
.explain em {
  color: red;
  font-style: normal;
}
.team .info {
  margin: .5rem 0;
}
.team .info li {
  width: 50%;
  display: flex;
  margin-bottom: .22rem;
}
.team .info li label {
  display: inline-block;
  text-align: right;
  color: #fff;
  height: .4rem;
  line-height: .4rem;
  width: 1.3rem;
}
.team .info li .top, .team .info li textarea {
  flex: 1;
  display: block;
  border: 1px solid #cacacb;
  color: #b29880;
  padding: 0 .07rem;
  background: 0 0;
  box-sizing: border-box;
  width: auto;
  height: .4rem;
  line-height: .4rem;
}
.team .info .sex-wrapper {
  flex: 1;
  width: 70%;
  height: .4rem;
  line-height: .4rem;
  display: block;
  background: 0 0;
  box-sizing: border-box;
}
.team .info .sex-wrapper input {
  color: #fff;
  border: none;
  display: inline-block;
  width: .2rem;
  height: .15rem;
}
.team .info .sex-wrapper span {
  display: inline-block;
  height: .4rem;
  line-height: .4rem;
  margin-right: .3rem;
}
.team .info .time {
  color: #fff;
}
.team .info .time .line {
  margin-bottom: .2rem;
}
.team .info .time .line .separate {
  display: inline;
}
input[type=checkbox], input[type=radio] {
  box-sizing: border-box;
  padding: 0;
}
.team .info .time .line label {
  width: auto;
  cursor: pointer;
}
.team .info .time input[type=text] {
  border: 1px solid #cacacb;
  height: .4rem;
  width: 1.3rem;
  line-height: .4rem;
  color: #b29880;
  padding: 0 .07rem;
  margin: .1rem;
  background: 0 0;
  box-sizing: border-box;
}
.team .info li .mark {
  display: inline-block;
  color: red;
  padding-left: .08rem;
  height: .4rem;
  line-height: .43rem;
}
.team .info li textarea {
  height: 2rem;
}
.team .info .photo {
  flex: 1;
  width: 70%;
  height: auto;
  display: block;
  background: 0 0;
  box-sizing: border-box;
}
.team .info .photo .img-wrapper {
  border: 1px solid #cacacb;
  height: 2rem;
}
.team .info .photo p {
  margin: .2rem 0;
  font-size: .1rem;
  color: red;
}
.team .info .photo .btn {
  display: inline-block;
  position: relative;
  margin: 0 auto;
  width: 1.5rem;
  height: .5rem;
  line-height: .5rem;
  border-radius: .06rem;
  color: #d87e1d;
  border: 1px solid #d87e1d;
  text-align: center;
  background: 0 0;
  cursor: pointer;
}
.m-anchor .team .info .photo .btn input {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
.submit-wrap {
  width: 100%;
  margin-top: 0;
}
.submit {
  height: .56rem;
  font-size: .2rem;
  display: block;
  margin: 0 auto;
  width: 3.4rem;
  line-height: .56rem;
  border-radius: .06rem;
  color: #d87e1d;
  border: 2px solid #d87e1d;
  text-align: center;
}
/* 第二次提交 */
.layer {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}
.layer .wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 10%;
  margin: 0 auto;
  width: 50%;
  background-color: #2e222e;
  border-radius: .1rem;
  padding: .4rem;
  max-height: 70%;
  overflow: auto;
}
.layer .wrapper .title {
  color: #fccc84;
  font-size: .2rem;
  font-weight: 700;
  padding-left: .08rem;
}
.myul {
  display: block;
  color: #fff;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  font-size: .16rem;
  border-bottom: 1px solid rgba(255,255,255,.05);
  padding: .2rem .08rem;
  line-height: 2;
}
.layer .wrapper .footer div {
  margin: 0 auto;
  width: 3.7rem;
  padding: .34rem;
  padding-top: .6rem;
}
.layer .wrapper .footer a:first-child {
  margin-right: .2rem;
}
.layer .wrapper .footer a {
  border-width: 2px;
}
.layer .wrapper .footer a {
  display: inline-block;
  cursor: pointer;
  width: 1.7rem;
  height: .56rem;
  line-height: .56rem;
  border-radius: .06rem;
  color: #d87e1d;
  border: 1px solid #d87e1d;
  text-align: center;
  font-size: .2rem;
  box-sizing: border-box;
}
.layer .wrapper .footer a:hover {
  background-color: #d87e1d;
  color: #fff;
}
.layer .wrapper .confirm-tip {
  color: #d87e1d;
  margin-top: 20px;
  font-size: .12rem;
  text-align: center;
}
/* 提交成功 */
.layer-window {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}
.layer-window .wrapper {
  top: 10%;
  width: 35%;
  height: 50%;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #2e222e;
  border-radius: 6px;
  padding: 0 .4rem;
  box-sizing: border-box;
}
.layer-window .wrapper .close {
  position: absolute;
  top: .1rem;
  right: .1rem;
  width: .33rem;
  height: .33rem;
  cursor: pointer;
  background-image: url(../../assets/events/03.png);
  background-size: .33rem auto;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.5;
}
.layer-window .wrapper .close:hover{
  opacity: 1;
}
.layer-window .wrapper .ok {
  background-image: url(../../assets/events/01.png);
}
.layer-window .wrapper .icon {
  margin: 0 auto;
  margin-top: .32rem;
  height: 1.24rem;
  width: 1.24rem;
  background-size: auto 1.24rem;
  background-repeat: no-repeat;
  background-position: center center;
}
.layer-window .wrapper .tip {
  margin-top: .28rem;
  color: #fff;
  font-size: .4rem;
  text-align: center;
}
.layer-window .wrapper .tip2 {
  margin: .28rem 0;
}
.layer-window .wrapper .confirm:hover{
  background-color: #d87e1d;
  color: #fff;
}
.layer-window .wrapper .confirm {
  height: .56rem;
  font-size: .2rem;
  display: block;
  margin: 0 auto;
  width: 3.4rem;
  line-height: .56rem;
  border-radius: .06rem;
  color: #d87e1d;
  border: 2px solid #d87e1d;
  text-align: center;
}
</style>
