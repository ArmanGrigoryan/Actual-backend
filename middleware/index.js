const { Schema, type, error } = require('../validator/user')
const ApiError = require('../utils/error')
const jwt = require('jsonwebtoken')

function validate(Schema){
    return function (req,res,next) {
        const {error,value} = Schema.validate(req.body)
        error ? next(error) : next()
    }
} 
function jwtAuthentcation(user){
    return jwt.sign(user,process.env.ACSES_TOCKEN_SECRET,{expiresIn:'10m'})
}
function authenticateTocken(req,res,next){
    const authHeader = req.header['authorization']
    const [type,token]=authHeader.split(' ')
    if(type !== 'Bearer' || !token) next(ApiError.unauthorized());
    jwt.verify(token,process.env.ACSES_TOCKEN_SECRET,()=>{
        if(error)next(error)
        req.user=user
        next()
    })
}

module.exports = {
    validate,
    jwtAuthentcation,
    authenticateTocken
}

