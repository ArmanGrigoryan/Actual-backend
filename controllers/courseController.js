const UserService = require("../services/userService");

class UserController {
    static getData(req, res, next) {
        try {
            // const 
            return res.status(200).json({ title: 'Express' });
        }
        catch(err) {
            return res.send(err.message)
        }
    }
}

module.exports = UserController;