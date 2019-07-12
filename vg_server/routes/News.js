const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/1",(req,res)=>{
  var sql="SELECT * FROM `vg_news_items` where seq_newest!=0 ORDER BY seq_newest DESC";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
router.get("/2",(req,res)=>{
  var sql="SELECT * FROM `vg_news_items` where seq_new_arrival!=0 ORDER BY seq_new_arrival DESC";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
router.get("/3",(req,res)=>{
  var sql="SELECT * FROM `vg_news_items` where seq_edition!=0 ORDER BY seq_edition DESC";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
module.exports=router;
//http://127.0.0.1:3000/News