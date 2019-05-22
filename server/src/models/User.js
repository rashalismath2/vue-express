const Sequelize=require('sequelize');



module.exports=(sequelize)=>{
    var user=sequelize.define('User',{
        email:{
            type:Sequelize.STRING,
            unique:true
        },
        password:Sequelize.STRING
    });
    return user;
}