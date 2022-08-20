const userControllers= require("../controllers/user.controller");


module.exports=app=>{
    app.post('/api/register',userControllers.register);
    app.post('/api/login',userControllers.login);
}
