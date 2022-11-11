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

nm.insertMany([{name:'abc',age:19,rno:02},{name:'def',age:22,rno:03},{name:'ghi',age:25,rno:04},//{name:'jkl',age:23,rno:05}]).then(function(){
	console.log("Data inserted")}).catch(function(error){
		console.l0g(error)});
