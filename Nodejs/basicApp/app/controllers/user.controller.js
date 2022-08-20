const UserModel = require("../models/user.model");
const bcrypt= require("bcrypt");
var jwt = require('jsonwebtoken');



exports.register=(req,res)=>{

    const {fullName,email,role,password}=req.body;

    const user=new UserModel({
        fullName,email,role,password:bcrypt.hashSync(password,10)
    })

    user.save()
    .then(data=>{
        res.send({message:"User Resgistered successfully"});
    })
    .catch(err=>{
        res.status(500).send({mesage:err.message})
    })
}

exports.login=(req,res)=>{

    const {email,password}=req.body;

    UserModel.findOne({
        email:email
    })
    .then((data)=>{
        if(!data){
            res.status(404).send({mesage:"Email Not Found"})
        }

          //compare passwords 
          var isPasswordValid= bcrypt.compareSync(password,data.password);

          if(!isPasswordValid){
              res.status(401).send({message:"Invalid Password"});
          }

          //create a JWT

          var token = jwt.sign({ id:data.id },"abcdefr");
          console.log(token);


          res.send({
              user:{
                  id:data._id,
                  email:data.email,
                  fullName:data.fullName
              },
              accessToken:token
          });

    })
    .catch(err=>{
        res.status(500).send({mesage:err.message})
    })


  
    
}