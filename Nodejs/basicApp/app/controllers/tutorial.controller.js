
const TutorialModel = require("../models/tutorial.model");


exports.create = (req,res)=>{

    if(!req.body.title){
        res.staus(400).send({message:"Title cannot be empty"})
    }

    const {title,description,published}=req.body;

    const tutorial = new TutorialModel({
        title,
        description,
        published: published ? published : false
    });

    tutorial.save()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Some error occured while creating the tutorial" })
    })

}


exports.findAll=(req,res)=>{

    TutorialModel.find({})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Some error occured while retrieving the tutorial" })
    })

}

exports.findOne=(req,res)=>{

    const id=req.params.id;

    TutorialModel.findById(id)
    .then(data=>{

        if(!data){
            res.status(404).send({message:"Not able to find tutorial with "+id});
        }

        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Some error occured while retrieving the tutorial with id"+id })
    })
}
 

exports.update=(req,res)=>{

    const id=req.params.id;

    if(!req.body){
        res.status(400).send({message:"Data cannot be empty"});
    }

    TutorialModel.findByIdAndUpdate(id,req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not able to find tutorial with "+id});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Some error occured while retrieving the tutorial with id"+id })
    })
}

exports.deleteAll=(req,res)=>{
    
    TutorialModel.deleteMany({})
    .then(data=>{
        res.send({message:`${data.deletedCount} tutorials deleted successfully`});
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Some error occured while deleting the tutorials"})
    })
}

exports.deleteOne=(req,res)=>{

    const id=req.params.id;

    TutorialModel.findByIdAndRemove(id)
    .then(data=>{

        if(!data){
            res.status(404).send({message:"Not able to find tutorial with "+id});
        }
        res.send({message:"Tutorial deleted successfully"});
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Some error occured while deleting the tutorial"})
    })

}