var express= require("express");
var bodyParser = require('body-parser')
const random = require('random');
const res = require("express/lib/response");

var app=express();

app.use(bodyParser.json());

//CRUD

var users=[
    {id:1341235,name:"Utkarsh",age:27},
    {id:293745134,name:"Rahul",age:33},
    {id:23525,name:"Pawan",age:35},
    {id:2351541,name:"Shreya",age:22}
];


app.get('/api/users',(req,res)=>{
    res.json(users);
})


//user should be able to get a user by its id
app.get('/api/users/:id',(req,res)=>{

    const id= parseInt(req.params.id);
    
    const user=users.find((user)=>user.id===id);

    if(!user){
        res.status(404).json({message:"User doesnot exists"});
    }

    res.send(user);
})


//create a new user 
app.post('/api/users',(req,res)=>{

    if(!req.body.name || !req.body.age){
        res.status(400).json({message:"Invalid data!"});
    }
    
    const user={name:req.body.name,age:req.body.age,id:random.int(1,10000000)};
    users.push(user);
    res.json(user);
})


//update the user via idd
app.put('/api/users/:id',(req,res)=>{

    const id=req.params.id;
    const user=users.find((user)=>user.id===parseInt(id));

    if(!user){
        res.status(404).send({message:"Invalid user id"});
    }

    const keys=Object.keys(req.body);
    console.log(keys);

    keys.forEach((key)=>{
        if(!user[key]){
            res.status(400).send({message:"Invalid details passed in the body"});
        }
        user[key]=req.body[key];
    })

    res.send(user);
})



//delete on the basis of id 

app.delete('/api/users/:id',(req, res)=>{

    const id=req.params.id;
    const user=users.find((user)=>user.id===parseInt(id));

    if(!user){
        res.status(404).send({message:"Invalid user id"});
    }

    users=users.filter((user)=>user.id!==parseInt(id));
    res.send(user);
})


app.listen(8001,()=>{
    console.log("your server is running on port 8000");
})



