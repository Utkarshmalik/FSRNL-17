var express= require("express");
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
const random = require('random')
mongoose.connect('mongodb+srv://utmalik:qwerty123@cluster0.aoubknq.mongodb.net/?retryWrites=true&w=majority');
var app=express();
app.use(bodyParser.json())


var db=mongoose.connection;

db.on("error",()=>{
    console.log("Unable to connect to DB");
})

db.once('open',()=>{
    console.log("Connection successful");
})


const blogSchema = new mongoose.Schema({
    id: Number,
    title:  String, 
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

  const Blog= mongoose.model('Blog',blogSchema);



  //    POST      /api/blogs 
  //    GET       /api/blogs
  //    GET       /api/blogs/:id
  //    PUT       /api/blogs/:id 
  //    DELETE    /api/blogs/:id
  //    DELETE    /api/blogs


  app.post('/api/blogs',(req,res)=>{
      
    const {title,author,body}=req.body;
    const id=random.int(0, 10000000);
    const comments=[];
    const meta={
        votes:0,
        favs:0
    };

    const newBlog= new Blog({title,author,body,id,comments,meta});

    newBlog.save()
    .then((data)=>{

        if(!data){
            res.status(400).send({mesage:"Something went wrong"});
        }
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({mesage:"DB Server not available"});
    })
  })



  app.get('/api/blogs',(req,res)=>{
       Blog.find({})
       .then((data)=>{
           if(!data){
               res.status(404).send({mesage:"Unable to retireve blogs"});
           }
           res.send(data);
       })
       .catch((err)=>{
           res.status(500).send({message:err});
       })
  })


  app.get('/api/blogs/:id',(req,res)=>{

    var _id= mongoose.Types.ObjectId(req.params.id);

    Blog.find({_id})
    .then((data)=>{
        if(!data || !data.length){
            res.status(404).send({mesage:"Unable to retireve blogs"});
        }
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({message:err});
    })
  })

  app.put('/api/blogs/:id',(req,res)=>{

    //findByIdAndUpdate

  })

  app.delete('/api/blogs/:id',(req,res)=>{

    //findByIdAndDelete
  })

  app.delete('/api/blogs',(req,res)=>{

    //deleteMany
  })



app.listen(8001,()=>{
    console.log("your server is running on port 8001");
})







//Middlewares 
//Login (Authentication) 
//user : normal and admin 
// read questions : all users 
// write questions : admin users 
//Authorization
//Foreign key (create authors CRUD)
//MVC architecture