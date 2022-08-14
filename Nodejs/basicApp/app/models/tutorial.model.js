const mongoose = require("mongoose");


const TutorialSchema= mongoose.Schema({

    title:String,
    description:{
        type:String,
        minLength:10
    },
    published:Boolean
});

const TutorialModel= mongoose.model('tutorial',TutorialSchema);

module.exports=TutorialModel;