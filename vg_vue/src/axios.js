import Vue from "vue"
//引入用npm安装的axios模块
import axios from "axios"
//让axios自动携带cookieid到服务端，为学session做准备
axios.defaults.withCredentials = true;
//设置请求服务器基础路径
axios.defaults.baseURL = "http://localhost:3000/"
//将axios注册 Vue实例
Vue.prototype.axios = axios;