const AuthenticationController=require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy=require('../policies/AuthenticationControlPolicy');

module.exports= (app)=>{
    app.post('/register',AuthenticationControllerPolicy,AuthenticationController.register)
    
}