const Sequelize=require('sequelize');



module.exports=(sequelize)=>{
    sequelize.define('User',{
        email:{
            type:Sequelize.STRING,
            unique:true
        },
        password:Sequelize.STRING
    })
}