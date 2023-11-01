// const DB = require('../db/index');
// const Users = DB.users
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken')
const ApiError = require('../utils/error');
const { jwtAuthentcation } = require('../middleware/index');
// const { now } = require('sequelize/types/utils');


class UserService {
    async createNewUser(body) {
        try {
            const {
                name,
                lastname,
                email,
                phone,
                password,
            } = body;
            const hashPass = await bcrypt.hash(password, 10);
            const unique = await uuid.v4();
            // const query = `
            //     INSERT INTO Users(name, lastname, email, phone, password, activationCode)
            //     VALUES (?, ?, ?, ?, ?, ?)
            // `;
            // await DBConn.query(query, [
            //     name,
            //     lastname,
            //     email,
            //     phone,
            //     hashPass,
            //     unique,
            // ]);
            let samson= await Users.create({
                    name,
                    lastname,
                    email,
                    password:hashPass,
                    activationCode:unique,
                    phone,
                    // active,
                    // creationDate
            })
            throw ApiError.badRequest(' muce')
            // return { title: 'Sign up' };
        }
        catch(err) {
            console.log(err);
        }
    }

    async verifyNewUser(code) {
        try {
            return { title: 'Verify' };
        }
        catch(err) {
            return res.send(err.message)
        }
    }

    async loginUser(body) {
        const{email,password}=body;
//        const query = `
//        SELECT * FROM Users WHERE email = ?
//    `;
//      const [[canditate]]=await DBConn.query(query,email);
    
     if(!canditate) throw ApiError.badRequest('logint sxal e axjik jan');
     if(await bcrypt.compare(password,canditate.password)){
        const{password,...user}=canditate
        const accessToken = jwtAuthentcation(user)
        return accessToken
     }else{
        throw ApiError.badRequest('parold sxal e varcd muce')
     }

    }

    async logoutUser(id) {
        try {
            return { title: 'Logout' };
        }
        catch(err) {
            return res.send(err.message)
        }
    }

    async getUserData(id) {
        try {
            return { title: 'User info' };
        }
        catch(err) {
            return res.send(err.message)
        }
    }

    async updateUserData(data) {
        try {
            return { title: 'Update User info' };
        }
        catch(err) {
            return res.send(err.message)
        }
    }
}

module.exports = new UserService();

/*
INSERT INTO Users(name, lastname, email, password, active, activationCode, creationDate)
VALUES ('a', 'b', 'c', 'd', false, null, sysdate())

UPDATE `Users` SET `activationCode`=0 where `id`=1

*/