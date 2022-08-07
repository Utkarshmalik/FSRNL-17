var express= require("express");
var bodyParser = require('body-parser')
var app=express();

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    console.log(req.body);
    res.send("Hello");
})

app.post('/login',(req,res)=>{

    const userName=req.body.userName;
    const password=req.body.password;

    //validate this 

    console.log(userName);


    res.send("fee");
})

app.get('/users',(req,res)=>{
    res.send("Users");
})


app.listen(8001,()=>{
    console.log("your server is running on port 8000");
})