var mongoose= require("mongoose");


var userSchema= mongoose.Schema({

    fullName:{
        type:String,
        required:[true,'fullName is not present']
    },
    email:{
        type:String,
        unique:[true,'email already exists in the DB'],
        required:[true,'email is not present'],
        lowercase:true
    },
    role:{
        type:String,
        enum:["normal","admin"]
    },
    password:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('User',userSchema);