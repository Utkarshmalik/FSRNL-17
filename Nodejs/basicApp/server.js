var express= require("express");
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
var cors = require('cors')

const dbConfigs= require("./app/config/db.config");
var app=express();
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


app.listen(8001,()=>{
    console.log("your server is running on port 8001");
})





// GET  /api/tutorials
// GET  /api/tutorials/:id
//POST  /api/tutorials
//PUT   /api/tutorials/:id
// DELETE /api/tutotials/:id
// DELETE  /api/tutorials
