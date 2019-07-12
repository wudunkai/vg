<template>
  <div class="footer">
    <div class="footer_content">
      <div class="cprt">
        <div class="logoContainer">
          <div class="logo_sem"></div>
          <div class="logo_ne"></div>
        </div>
        <div class="info">
          <ul class="clearFix">
            <li><a href="#" target="_blank">隐私</a></li>
            <li> | </li>
            <li><a href="#" target="_blank">法律条款</a></li>
          </ul>
          <p>©2019Super Evil Mega Corp. All Rights reserved.
          </p>
          <p>
            文网游进字〔2016〕|
            <a href="#" target="_blank">沪网文【2018】1832-126号</a> |
            <a href="#"
            target="_blank">增值电信业务经营许可证编号：沪B2-20180491</a>
          </p>
          <p>互联网违法和不良信息举报电话：12321 <a href="#" target="_blank">穗公网安备
              4401020205029号</a> | <a href="#" target="_blank">上海市网络游戏行业自律公约</a></p>
          <p>
            <a target="_blank" href="#">
              <img src="../../assets/footers/fzx110.png">
            </a>
            <a target="_blank" href="#" alt="营业执照信息">
              <img src="../../assets/footers/fsgs-icon.png">
            </a>
            <a target="_blank" href="#">
              <img src="../../assets/footers/ficon20120516.png">
            </a>
          </p>
        </div>
      </div>
      <p class="tips" v-html="tips"></p>   
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tips:`健康游戏忠告：抵制不良游戏，拒绝盗版游戏。<br/>注意自我保护，谨防受骗上当。<br/>适度游戏益脑，沉迷游戏伤身。<br/>合理安排时间，享受健康生活。`
    }
  },  
}
</script>
<style scoped>
/* 页脚内容 */
.footer {
  margin: 0;
  padding: .5rem 0;
  position: relative;
  line-height: .2rem;
  font-size: .12rem;
}
.footer_content {
  width: 100%;
  margin: 0 auto;
  max-width: 12rem;
}

/* 页脚顶 */
.footer_content .cprt {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
/* 页脚顶logo */
.footer_content .cprt .logoContainer {
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.footer_content .cprt .logoContainer .logo_sem {
  width: 138px;
  height: 48px;
  position: relative;
  background: url('../../assets/footers/sem_logo.png') no-repeat;
  margin: 0 .2rem;
}
.footer_content .cprt .logoContainer .logo_ne {
  width: 190px;
  height: 55px;
  position: relative;
  background: url('../../assets/footers/logo_ne.png') no-repeat;
  margin: 0 .2rem;
}
/* 页脚顶内容 */
.footer_content .cprt .info {
  flex-grow: 1;
  padding: .4rem .1rem;
  display: block;
}
.footer_content .cprt .info ul {
  margin: 0 0 0 -10px;
  padding: 0 0 5px;
  overflow: hidden;
  list-style: none;
}
.footer_content .cprt .info ul li {
  float: left;
  list-style: none;
  color: #ccc;
}
.footer_content .cprt .info ul li a {
  padding: 0 10px;
  color: #c3c6cb;
}
.footer_content .cprt .info ul li a:hover {
  color: #fff;
}

/* 页脚底 */
.footer_content .tips {
  border-top: 1px solid #3e3e3e;
  margin-top: .2rem;
  padding: .2rem 0;
  clear: both;
  text-align: center;
  position: relative;
}
</style>
