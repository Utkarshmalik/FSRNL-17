const tutorialControllers= require("../controllers/tutorial.controller");


module.exports=app=>{
    app.post("/api/tutorials",tutorialControllers.create);
    app.get("/api/tutorials",tutorialControllers.findAll);
    app.get("/api/tutorials/:id",tutorialControllers.findOne);
    app.put("/api/tutorials/:id",tutorialControllers.update);
    app.delete("/api/tutorials",tutorialControllers.deleteAll);
    app.delete("/api/tutorials/:id",tutorialControllers.deleteOne);
}

