const Sequelize = require('sequelize')

const sequelize = new Sequelize('Educavo','dev','dev123',{
  dialect:'mysql',
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
    sequelize:sequelize,
    users:Users

}