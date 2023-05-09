const DBConn = require('../services/database.service');
const bcrypt = require('bcrypt');
const jwt = require('json-web-token');
const uuid = require('uuid');

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
            const query = `
                INSERT INTO Users(name, lastname, email, phone, password, activationCode)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            await DBConn.query(query, [
                name,
                lastname,
                email,
                phone,
                hashPass,
                unique,
            ]);

            return { title: 'Sign up' };
        }
        catch(err) {
            return err.message
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
       console.log(email,password,1111111);
       const query = `
       SELECT * FROM Users WHERE email = ?
   `;
     const [[canditate]]=await DBConn.query(query,email);
     console.log( canditate );

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