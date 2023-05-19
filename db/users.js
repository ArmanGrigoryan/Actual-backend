const Sequelize = require('sequelize')

// const { type } = require('../validator/user')

module.exports = function(sequelize){
    return sequelize.define('user',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            allowNull:false
    
        },
        name:{
            type:Sequelize.STRING,
           
        },
        lastname:{
            type:Sequelize.STRING,
           
        },
        email:{
            type:Sequelize.STRING,
             
        },
        password:{
            type:Sequelize.STRING,
            
        },
        active:{
            type:Sequelize.INTEGER,
            defaultValue: 0,
            
        },
        activationCode:{
            type:Sequelize.STRING,
           
        },
        creationDate:{
            type:Sequelize.STRING,
            defaultValue: Date,
             
        },
        phone:{
            type:Sequelize.STRING,
             
        },

    }, )
        
    
    
}