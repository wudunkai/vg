<template>
  <div class="wrapper">
    <div class="main">
      <headers></headers>
      <sidebar></sidebar>
      <div class="news_top">
        <div class="news_bot">
          <div class="news_main">
            <div class="news_header_wrap">
              <h3>2019 CVPL 夏季海选赛 赛事规则</h3>
              <hr>
            </div>
            <div class="news_content_wrap">
              <div align="center">
                <img id="head-img" src="../../assets/events/06.jpg">
              </div>
              <br/>
              <p class="bold">1.报名时间：</p>
              <p>&nbsp;&nbsp;<span class="bold">开启：</span>2019年4月16日 10:00<br/>&nbsp;&nbsp;<span class="bold">截止：</span>2019年4月25日 22:00</p>
              <p class="bold">2.报名入口：&nbsp;&nbsp;<a href="#submit" class="go">立即前往</a></p>
              <p class="bold">3.报名流程：</p>
              <ul style="list-style: none;">
                <li>1） 填写申请： 每支参赛队由队长进入官网报名入口进行填写，并确认信息无误，提交之后不得重复提交，可申请1次修改信息；</li>
                <li>2） 信息审核：队长提交报名信息后请保持手机畅通，我们将会在报名截止后向队长进行电话确认。组委会将对所有参赛选手的账号进行审查，如有发现任何违规行为将取消其参赛资格；</li>
                <li>3） 报名成功：加入赛事官方沟通群，等待赛事安排通知；<br/>
                    注：参赛队长需按官网公布的赛事信息提前进行报名，未能在截止时间4月25日22:00前提交申请表，则视为报名失败。<br/>
                    本次比赛最多64支参赛队，我们将按队伍总段位最高与报名时间最早为序审核报名队伍。</li>
              </ul>
              <p class="bold">4.报名要求：</p>
              <ul style="list-style: none;">
                <li>1） 参赛队伍全员必须拥有《虚荣》国服账号；</li>
                <li>2） 队内所有参赛账号于2019年1月31日前注册，且玩家段位高于4段（含4段）；</li>
                <li>3） 每支队伍需在报名时提供5名选手名单(含队长)及至多2名替补；</li>
              </ul>
              <p class="bold">5.比赛模式：</p>
              <ul style="list-style: none;">
                <li>1） 比赛为线上赛；</li>
                <li>2） 所有比赛均为5v5征召模式;</li>
                <li>3） 采用BO3(单场淘汰制);</li>
                <li>4） 晋级赛按64进32，32进16的晋级流程比赛，当参赛战队数量不满足以上偶数晋级原则时，可抽签轮空(每支战队最多只允许轮空一次。如出现当前战队都出现已轮空一次情况，则抽签决定下一轮轮空战队)；<br/>
                    注： 所有轮次的选手对阵均由官方统一抽签安排，请参赛选手务必准时进行签到和比赛。该轮次逾期未签到的选手视为弃权。</li>
              </ul>
              <p class="bold">6.阶段奖励：</p>
              <p>&nbsp;&nbsp;16强队伍晋级进入“预选赛”阶段</p>
              <p class="bold">7.海选赛-完赛奖励：</p>
              <p>&nbsp;&nbsp;只要你和你的队伍按时签到并完成所有海选赛比赛，没有缺席或弃赛的情况，无论晋级与否，队伍将获得游戏内3,000 ice及“神秘奖励”。</p>
            </div>
            <div class="signup">
              <a name="submit"></a>
              <button class="z-dis" id="submit">报名已结束</button>
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
export default {
  data() {
    return {
      
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
.signup {
  margin: 0 auto;
  margin-top: .3rem;
  width: 2.7rem;
  position: relative;
}
.signup button {
  width: 100%;
  display: inline-block;
  height: .75rem;
  line-height: .75rem;
  border-radius: .06rem;
  font-size: .3rem;
  padding: 0 .3rem;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  text-align: center;
  border: none;
  background-color: #707070;;
}
</style>