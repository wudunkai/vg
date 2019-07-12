<template>
  <div>
    <router-link :to="item.href" class="flex_news_items" v-for="(item,index) of news" :key="index">
      <img :src="'http://127.0.0.1:3000/'+item.pic">
      <p>{{item.title}}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news:[],  
    }
  },
  created() {
    //发送ajax
    var url = "NewsItems"
    this.axios.get(url).then(result => {
      this.news=result.data.data;
    })
  },
}
</script>
<style scoped>
.flex_news_items {
  width: 30%;
  padding: 1px;
  background: rgba(0,0,0,.8);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  transition: all ease .3s;
}
.flex_news_items:hover {
  transform: scale(1.1);
  transition: all ease .3s;
}
.flex_news_items img {
  height: 181px;
}
.flex_news_items p {
  text-align: center;
  padding: .12rem .1rem;
  font-size: .12rem;
}
</style>