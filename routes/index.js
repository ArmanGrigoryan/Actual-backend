const router = require('express').Router();
const NodeMailer = require('../services/Nodemailer.js');
const MailInstance = new NodeMailer();

router.use('/user', require('./users'));
router.use('/courses', require('./courses'));
router.get('/asdfasdf', function(req, res, next) {
    res.status(200);
    res.send('success');
});
router.post('/send-mail', MailInstance.sendHtmlTemplate);

module.exports = router;