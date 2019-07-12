<template>
  <div class="wrapper">
    <div class="main">
      <headers></headers>
      <sidebar></sidebar>
      <div class="news_top">
        <div class="news_bot">
          <div class="news_main">
            <div class="news_header_wrap">
              <h3>《虚荣》PC平台账号升级公告</h3>
              <hr>
            </div>
            <div class="news_content_wrap">
              <div align="center">
                <img src="../../assets/events/kv.jpg">
              </div>    
              <a href="#" target="_blank" class="download_pc"></a>                       
              <p>全球首个PC、移动跨平台MOBA游戏《虚荣Vainglory》的PC版将于5月21日进入Beta测试。为保障账户安全和提供更好的服务，我们将在《虚荣》PC版率先推出全新的账号安全绑定功能。</p>
              <p>《虚荣》PC版账号升级须知：</p>                           
              <ul class="noc">
                <li>1.	进入全新的《虚荣》PC版Beta测试（官网下载链接）时，您需要使用网易宝船账号进入游戏，如果您还没有网易宝船账号，请先注册一个；</li>
                <li>2.	如果您已注册了《虚荣》账号（不含安卓手机应用市场账号，如：华为账号），使用新的网易宝船账号首次登录PC端时，您会收到提示将已有的《虚荣》账号与新注册的网易宝船账号进行绑定；绑定之后，您将可以使用网易宝船账号从PC端登录虚荣；在《虚荣》移动端提供账号绑定服务前，使用原《虚荣》账号登录移动端，双端数据将被打通；</li>
                <li>3.	如果跳过“绑定”这一步，或此前未注册过《虚荣》账号，您将会被分配到一个全新的虚荣账号进入游戏。目前，您仅可以使用新创建的网易宝船账号登录《虚荣》PC版，直到《虚荣》移动端账号提供账号绑定服务后，可实现跨平台登录和数据互通；</li>
                <li>4.	无论您之前是使用的是iOS、安卓（非手机应用市场版本），还是PC Alpha客户端注册了《虚荣》，均可以通过网易宝船Launcher绑定现有的《虚荣》账号。由于安卓手机应用市场账号体系不同，此次账号升级不包含此类账号，给您带来的不便深表歉意。</li>
              </ul>
              <p><b>注意：每个网易宝船账号只能绑定一个《虚荣》账号，且绑定后无法进行更改；账号绑定完成之后，原账号目前还可以在iOS、安卓（非手机应用市场版本）客户端中继续使用。</b></p>
              <h4>以下步骤为宝船账号绑定详细介绍：</h4>
              <h4>第一步：注册网易宝船账号</h4>
              <div align="center">
                <img src="../../assets/events/1.png">
              </div>
              <p>请注意：网易邮箱账号不等同于网易宝船账号，如果您持有网易邮箱，可通过邮箱账号注册网易宝船账号。</p>      
              <h4>第二步：账号安全绑定操作</h4>
              <p>启动《虚荣》PC版，并通过网易宝船账号登录游戏之后，可以把现有《虚荣》账号与网易宝船账号进行绑定。</p>
              <div align="center">
                <img src="../../assets/events/2.png">
              </div>
              <ul>
                <li>
                  <h5>选项一：选择绑定《虚荣》账号</h5>
                  <div align="center">
                    <img src="../../assets/events/3.png">
                  </div>
                  <p>请注意，一旦完成绑定，该《虚荣》账号与网易宝船账号的绑定关系将无法被解除。</p>
                </li>
                <li>
                  <h5>选项二：选择跳过账号绑定，创建一个全新的《虚荣》角色</h5>
                  <p class="red">特别注意！ </p>
                  <p class="red">点击“跳过”后，这个网易宝船账号将无法再与任何已有的《虚荣》账号绑定。如果您还需要进行绑定，则需要重新一个注册网易宝船账号。请慎重操作。</p>
                  <div align="center">
                    <img src="../../assets/events/4.png">
                  </div>
                  <p>如果确认不需要绑定，请点击继续来开始你崭新的《虚荣》之旅。</p>
                </li>
              </ul>
              <a href="#" class="download_pc" target="_blank"></a>
              <p>需要说明的是，《虚荣》国服跨平台PC Beta测试版本客户端还有众多需要改进的地方，如果你在使用时遇到漏洞或者不便敬请谅解，开发团队们尚有大量工作正在进行中。来体验一下吧，邀请您身边的玩家朋友们一起试试，记得把反馈告诉我们！</p>
              <p>我们十分尊重你们的反馈，请通过如下方式联系我们：</p>
              <div class="code">
                <img src="../../assets/events/8cm.jpg">
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
</style>
