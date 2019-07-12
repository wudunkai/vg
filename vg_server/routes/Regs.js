const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.post("/",(req,res)=>{
  var sql="INSERT INTO vg_user SET ?";
  pool.query(sql,[req.body],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
			res.send({code:200,msg:'register success',data:result});
		}
  })
})
module.exports=router;
//http://127.0.0.1:3000/Regs