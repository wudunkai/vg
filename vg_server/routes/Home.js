const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/",(req,res)=>{
  var sql="SELECT * FROM `vg_features_item` where seq_recommended!=0 ORDER BY seq_recommended";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
module.exports=router;
//http://127.0.0.1:3000/Home