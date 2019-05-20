const Sequelize=require('sequelize');
const config=require('../config/config');
const User=require('./User');

const sequelize=new Sequelize(
    config.db.name
    ,config.db.user,
    config.db.password,
    config.db.options
    );

//User model
User(sequelize);

module.exports=sequelize.sync();