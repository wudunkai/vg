<template>
  <ul class="academy-nav show_for_lg">
    <li class="" v-for="(item,index) in items" :key="index" :class="{selected:item.href === $route.path}">
      <router-link @click="academy(index)" :to="item.href">{{item.title}}</router-link>
      <span class="base_line"></span>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      items:[{title:"必备基础",href:"/academy"},{title:"游戏模式",href:"/academy/mode"},{title:"进阶技巧",href:"/academy/advance"},{title:"游戏装备",href:"/academy/equipment"}],
    }
  },
  methods: {
    academy(index){
      this.$router.push(index)
    },
  },
}
</script>
<style scoped>
ul.academy-nav li.selected a, ul.academy-nav li:hover a {
  color: #fccc84;
  font-weight: 600;
}
ul.academy-nav li.selected .base_line, ul.academy-nav li:hover .base_line {
  width: 60%;
  opacity: 1;
  left: auto;
}
ul.academy-nav {
  display: flex;
  overflow-x: auto;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: .6rem;
  width: 100%;
  margin: .5rem auto;
  background: rgba(29,27,33,.8);
  white-space: nowrap;
  transition: left 1s ease-in-out;
}
ul.academy-nav li {
  flex: 1;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
}
ul.academy-nav li a {
  padding: 0.15rem;
  color: #999;
  transition: all ease .4s;
}
ul.academy-nav li .base_line {
  left: auto;
  width: 0;
  position: absolute;
  bottom: 0;
  margin: auto;
  height: .03rem;
  background: #fccc84;
  transition: all ease .3s;
}
</style>
