module.exports= (app)=>{
    app.post('/register',(req,res)=>{
        res.send({
            Message:req.body.email
        });
    })
    
    app.get('/status',(req,res)=>{
        res.send({
            Message:'Hello world'
        })
    });
}