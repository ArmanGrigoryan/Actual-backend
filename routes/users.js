const router = require('express').Router();
const UserController = require('../controllers/userController');
const userSchema = require('../validator/user');
const validador = require('../middleware/index');


router.post('/register', validador.validate(userSchema), UserController.createUser);
router.get('/verification/:secret', UserController.verifyUser);   /// ? post
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/info', UserController.getUserinfo);
router.post('/update', UserController.updateUserinfo);

module.exports = router;