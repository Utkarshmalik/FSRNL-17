const tutorialControllers= require("../controllers/tutorial.controller");
var jwtAuth=require('../middlewares/authJWT');


module.exports=app=>{
    app.post("/api/tutorials",jwtAuth,tutorialControllers.create);
    app.get("/api/tutorials",tutorialControllers.findAll);
    app.get("/api/tutorials/:id",tutorialControllers.findOne);
    app.put("/api/tutorials/:id",jwtAuth,tutorialControllers.update);
    app.delete("/api/tutorials",jwtAuth,tutorialControllers.deleteAll);
    app.delete("/api/tutorials/:id",jwtAuth,tutorialControllers.deleteOne);
}

