  const User=require('../models/index').user;
  
  module.exports={
    async register(req,res){
        try {
          const user=await User.create(req.body);
          res.send(
              user.toJSON()
          )
        } catch (error) {
          res.status(500)
            .send({
              Error:error
          })
        }
    }

  }