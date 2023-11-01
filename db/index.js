const Sequelize = require('sequelize')

const sequelize = new Sequelize('actualtc_admin','root','root',{
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
})
const Users= require('./users')(sequelize)


sequelize.authenticate().then(()=>{
  console.log("sequelize connected");
}).catch((err)=>{
  console.log("error",err);
})

module.exports= {
    sequelize,
    users:Users
}