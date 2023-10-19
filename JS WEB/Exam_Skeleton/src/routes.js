const router = require('express').Router();

const homeControoller = require('./controllers/homeController');
const userController = require('./controllers/userControler');



router.use(homeControoller);
router.use('/users', userController);

module.exports = router;