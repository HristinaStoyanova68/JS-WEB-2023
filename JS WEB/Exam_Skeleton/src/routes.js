const router = require('express').Router();

const homeControoller = require('./controllers/homeController');
const userController = require('./controllers/userControler');
const photoController = require('./controllers/photoController');


router.use(homeControoller);
router.use('/users', userController);
router.use('/photos', photoController);
router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;