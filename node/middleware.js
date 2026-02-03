import express from 'express';
import http from'http';
import { Router } from 'express';
const router=express.Router();
const app=express();

//simple
app.use((req,res,next)=>{
    console.log("first middleware");
    next();
});
app.use((req, res,next)=>{
    console.log("secong middleware");
    next();
});


//router level
router.use((req,res,next)=>{            
    console.log("using router");
})
router.get('/user', (req,res)=>{  
    res.send("user profile");
})

const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged as ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}
app.use(LoggerMiddleware);

app.get('/users',(req,res)=>{
    res.json({
        'status':true
    })
})
app.listen(3002,(req,res)=>{
    console.log('server running on port 3002')
})  

//server
const server=http.createServer((req, res)=>{
    if(req.url==="/login"){
        console.log("login page");
        res.end(`<h1>login Profile</h1>`);
        return;
    }
    if(req.url==="/product"){
        console.log("product page");
        res.end(`<h1>product Profile</h1>`);
        return;
    }
    
    if(req.url==="/user"){
        console.log("user page");
        res.end(`<h1>User Profile</h1>`);
        return;
    }
    res.end(`Invalid path: ${req.url}`);    
});
 server.listen(3004,()=>{
        console.log("server starts!");
    })