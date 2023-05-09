const ApiError = require('../utils/error')
const { error, message } = require('../validator/user')

module.exports = (error,req,res,next)=>{
    console.log(error);
    if (error instanceof ApiError) {
        return res.status(error.status).json({message:error.message,errors:error.errors})
    }
}