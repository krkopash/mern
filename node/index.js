import fs from 'fs';
import server from './http.js';
import express from 'express';

const app=express();

app.get('/', (req,res)=>{
    res.send(server);

})
app.listen(3000, ()=>{
    console.log("listening");
})


