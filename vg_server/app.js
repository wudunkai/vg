//使用express构建web服务器 --11:25
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
var NewsItems=require("./routes/NewsItems");
var Home=require("./routes/Home");
var News=require("./routes/News");
var Regs=require("./routes/Regs");
var Academy=require("./routes/Academy");

var app = express();
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}))
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));
//将服务器的session，放在req.session中
/*使用路由器来管理路由*/
app.use("/NewsItems",NewsItems);
app.use("/Home",Home);
app.use("/News",News);
app.use("/Regs",Regs);
app.use("/Academy",Academy);