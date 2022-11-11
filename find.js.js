const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
if(err)
console.log("DB not connected-Error");
else
console.log("DB connected");
});


const ns=new mongoose.Schema({
name:String,
age:Number,
rno:Number
});

const nm=new mongoose.model("record",ns);

nm.find({rno:{$gte:03}},function(err,res){
 if(err){
    console.log(err);
 }
else
    console.log("Found",res);
});










