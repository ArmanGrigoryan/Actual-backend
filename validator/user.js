const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(16).required(),
    lastname:Joi.string().alphanum().min(6).max(16).required(),
    email:Joi.string().email().required(),
    password:Joi.string().alphanum().min(6).max(16).required(),
    phone:Joi.string().required(),
})

module.exports = userSchema