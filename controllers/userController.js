const UserService = require("../services/userService");

class UserController {
    async createUser(req, res, next) {
        try {

            await UserService.createNewUser(req.body);
            res.status(200).json({
                message: "Successfully registered"
            });
        }
        catch(err) {
            res.status(400).json(err.message)
        }
    }

    async verifyUser(req, res, next) {
        try {
            // const { activationCode } = req.body;
            const result = UserService.verifyNewUser();
            res.status(200).json(result);
        }
        catch(err) {
            res.send(err.message)
        }
    }

    async login(req, res, next) {
        try {
            const {accessToken:tocken} = await UserService.loginUser(req.body);
            await res.status(200).json({message:'ok',tocken});
        }
        catch(err) {
            res.send(err.message)
        }
    }

    async logout(req, res, next) {
        try {
            const result = UserService.logoutUser();
            res.status(200).json(result);
        }
        catch(err) {
            res.send(err.message)
        }
    }

    async getUserinfo(req, res) {
        try {
            const result = UserService.getUserData();            
            await res.status(200).json(result);
        }
        catch(err) {
            res.send(err.message)
        }
    }

    async updateUserinfo(req, res, next) {
        try {
            const result = UserService.updateUserData();
            res.status(200).json(result);
        }
        catch(err) {
            res.send(err.message)
        }
    }    
    
}

module.exports = new UserController();