const jwt=require("jsonwebtoken");
const UserModel = require("../models/user.model");


const verifyToken=(req,res,next)=>{

    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT'){

        jwt.verify(req.headers.authorization.split(' ')[1],"abcdefr",function(err,decode){

            if(err){
                res.status(403).send({message:"Invlid JWT Passed"});
                next();
            }

            UserModel.findById(decode.id)
            .then((user)=>{
                req.user=user;
                next();
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).send({message:err.message})
            })
        })
    }
    else{
    res.status(403).send({message:"Invlid JWT Passed"});
    next();
    }
}

module.exports=verifyToken;