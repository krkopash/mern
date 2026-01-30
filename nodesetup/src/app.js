//js
const express=require('express');
const app=express();

app.use("/", (req, res, next)=>{
    res.send('running');
})
app.get("/hello", (req,res,next)=>{
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("run");
})