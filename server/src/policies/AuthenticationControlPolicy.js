const Joi=require('joi');

module.exports=(req,res,next)=>{

    const schema={
        email:Joi.string().email(),
        password:Joi.string().regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
    }

    const {error,value}=Joi.validate(req.body,schema);

    if(error){
        switch(error.details[0].context.key){
            case 'email':
                res.status(500).send({
                    Error:"Enter a valid email"
                })
                break;
            case 'password':
                res.status(500).send({
                    Error:"Enter a valid password"
                })
                break;
            default :
                res.status(500).send({
                    Error:'Invalid registration'
                })
        }
    }else{
        next();
    }

}