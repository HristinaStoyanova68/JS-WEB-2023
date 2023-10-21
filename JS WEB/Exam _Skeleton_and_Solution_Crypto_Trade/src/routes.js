const router = require('express').Router();

const homeControoller = require('./controllers/homeController');
const userController = require('./controllers/userControler');
const cryptoController = require('./controllers/cryptoController');



router.use(homeControoller);
router.use('/users', userController);
router.use('/crypto', cryptoController);
// router.get('*', (req, res) => {
//     res.redirect('/404');
// });

module.exports = router;