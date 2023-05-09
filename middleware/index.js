const { Schema } = require('../validator/user')
const ApiError = require('../utils/error')
const jwt = require('jsonwebtoken')

function validate(Schema){
    return function (req,res,next) {
        const {error,value} = Schema.validate(req.body)
        error ? next(error) : next()
    }
} 
function jwtAuthentcation(user){
    return jwt.sign(user,process.env.ACSES_TOCKEN_SECRET,{encoding:'10m'})
}


module.exports = {
    validate,
    jwtAuthentcation
}

