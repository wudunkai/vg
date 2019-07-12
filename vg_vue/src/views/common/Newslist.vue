<template>
  <div>
    <router-link :to="item.href" class="flex_news_items" target="_blank" v-for="(item,index) of news" :key="index">
      <div class="flex_news_list_pic">
        <img class="flex_news_list_pic" :src="'http://127.0.0.1:3000/'+item.pic">
      </div>
      <div class="flex_news_list_content">
        <h4 class="news_title">{{item.title}}</h4>
        <p class="news_description">{{item.news_body}}</p>
        <p class="news_date">{{item.news_date}}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props:{
    news:{default:[]}
  },
  data() {
    return {
    }
  },
}
</script>
<style scoped>
.flex_news_items {
  flex-flow: row nowrap;
  padding: .2rem;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(68,62,80,.4);
  transition: all ease .4s;
}
.flex_news_items:hover {
  background: rgba(68,62,80,.5);
  transition: all ease .4s;
}
.flex_news_items .flex_news_list_pic {
  width: 30%;
  margin-right: .2rem;
  margin-bottom: 0;
}
.flex_news_items .flex_news_list_pic img {
  width: 100%;
  height: 173px;
  border: 1px solid #000;
}
.flex_news_items .flex_news_list_content {
  width: 70%;
}
.news_main h4 {
  font-weight: 400;
  padding-bottom: .3rem;
  font-size: .24rem;
}
.flex_news_items .flex_news_list_content .news_description {
  color: #999;
  word-wrap: break-word;
}
.flex_news_items .flex_news_list_content .news_date {
  margin-top: .2rem;
  color: #999;
}
</style>