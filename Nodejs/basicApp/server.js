var express= require("express");
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
var cors = require('cors')

const dbConfigs= require("./app/config/db.config");
var app=express();

app.use((req,res,next)=>{
    console.log('Time ',Date.now());
    next();
})

app.use(bodyParser.json())


app.use(cors())


mongoose.connect(dbConfigs.url);
var db=mongoose.connection;

db.on("error",()=>{
    console.log("Unable to connect to DB");
})

db.once('open',()=>{
    console.log("Connection successful");
})



require("./app/Routes/tutorial.routes")(app);
require("./app/Routes/user.routes")(app);


app.listen(8001,()=>{
    console.log("your server is running on port 8001");
})
