<template>
  <div class="wrapper">
    <div class="main">
      <headers></headers>
      <sidebar></sidebar>
      <div class="news_top">
        <div class="news_bot">
          <div class="news_main">
            <h4>新闻中心</h4>
            <newsitems class="flex_news_top"></newsitems>
            <div class="flex_news_tab">
              <a href="javascript:void(0);" @click="news1" :id="show1" :class="active">最新</a>
              <a href="javascript:void(0);" @click="news2" :id="show2">版本</a>
              <a href="javascript:void(0);" @click="news3" :id="show3">公告</a>
            </div>
            <newslist class="flex_news_list" :news="mynews"></newslist>
          </div>
        </div>
      </div> 
    </div>
    <footer class="footer">
      <footers></footers> 
    </footer>
  </div>
</template>
<script>
import Headers from '../views/common/Headers'
import Sidebar from '../views/common/Sidebar'
import Footers from '../views/common/Footers'
import NewsItems from '../views/common/NewsItems'
import Newslist from '../views/common/Newslist'
export default {
  data() {
    return {
      mynews:"",
      show1:"",
      show2:"",
      show3:"",
      active:"active"
    }
  },
  methods: {
    news1:function(){
      this.show1 = "active"
      this.show2 = ""
      this.show3 = ""
      var url = "News/1"
      this.axios.get(url).then(result => {
      this.mynews=result.data.data;
    })
    },
    news2:function(){
      this.show1 = ""
      this.show2 = "active"
      this.show3 = ""
      this.active = ""
      var url = "News/2"
      this.axios.get(url).then(result => {
      this.mynews=result.data.data;
    })
    },
    news3:function(){
      this.show1 = "";
      this.show2 = "";
      this.show3 = "active";
      this.active = ""
      var url = "News/3"
      this.axios.get(url).then(result => {
      this.mynews=result.data.data;
    })
    }
  },
  created() {
    //发送ajax
    var url = "News/1"
    this.axios.get(url).then(result => {
      this.mynews=result.data.data;
    })
  },
  components:{
    "headers":Headers,
    "sidebar":Sidebar,
    "footers":Footers,
    "newsitems":NewsItems,
    "newslist":Newslist
  },    
}
</script>
<style scoped>
.flex_news_top {
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  display: flex;
}
.flex_news_tab {
  margin: .4rem auto 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background: rgba(0,0,0,.4);
}
.flex_news_tab a {
  text-align: center;
  font-size: .18rem;
  padding: .15rem .3rem;
  margin-right: .1rem;
}
a.active{
  color:#fccc84;
}
a#active,.active a:hover {
  color: #fccc84;
}
.flex_news_list {
  display: flex;
  flex-flow: column nowrap;
}
</style>