const express=require('express');
const app=express();
//const port=3000;
app.get('/',(req,res)=>{
    res.end('home page');

});
app.get('/contact',(req,res)=>{
    res.end("my contact is manaswini117@gmail.com");
    });
    app.post('/tweets',(req,res)=>{
        res.status(201).end("my tweets are 1.hello world 2.how are you");
        });
        app.listen(8000,()=>{
            console.log("server is running on port 8000");
        });