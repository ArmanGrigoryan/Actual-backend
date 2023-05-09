const router = require('express').Router();

router.use('/user', require('./users'));
router.use('/courses', require('./courses'));

module.exports = router;