const express=require("express");
var router=express.Router();
var pool=require("../pool");
// academy的文本内容
router.get("/academy",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_text` where seq_academy!=0 ORDER BY seq_academy";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
router.get("/academyimg",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_img` where seq_academy!=0 ORDER BY seq_academy";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
//mode的文本内容
router.get("/mode",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_text` where seq_mode!=0 ORDER BY seq_mode";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
router.get("/modeimg",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_img` where seq_mode!=0 ORDER BY seq_mode";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
//advance的文本内容
router.get("/advance",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_text` where seq_advance!=0 ORDER BY seq_advance";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
router.get("/advanceimg",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_img` where seq_advance!=0 ORDER BY seq_advance";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
//equipment的文本内容
router.get("/equipment",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_text` where seq_equipment!=0 ORDER BY seq_equipment";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
router.get("/equipmentimg",(req,res)=>{
  var sql="SELECT * FROM `vg_academy_img` where seq_equipment!=0 ORDER BY seq_equipment";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
module.exports=router;
//http://127.0.0.1:3000/Academy/academy
//http://127.0.0.1:3000/Academy/academyimg
//http://127.0.0.1:3000/Academy/mode
//http://127.0.0.1:3000/Academy/modeimg
//http://127.0.0.1:3000/Academy/advance
//http://127.0.0.1:3000/Academy/advanceimg
//http://127.0.0.1:3000/Academy/equipment
//http://127.0.0.1:3000/Academy/equipmentimg