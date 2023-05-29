const Sequelize = require('sequelize')

// const { type } = require('../validator/user')
module.exports= function(sequelize){
    return sequelize.define('user',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            allowNull:false
    
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
           
        },
        lastname:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            unique: true,
            isEmail: true,
             
        },
        password:{
            type:Sequelize.STRING,
             allowNull:false
            
        },
        active:{
            type:Sequelize.TINYINT,
            defaultValue: 0,
            
        },
        activationCode:{
            type:Sequelize.STRING,
           
        },
        creationDate:{
            type:Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
           
             
        },
        phone:{
            type:Sequelize.STRING,
            unique: true,
        },

    });
    
        
    
    
}
