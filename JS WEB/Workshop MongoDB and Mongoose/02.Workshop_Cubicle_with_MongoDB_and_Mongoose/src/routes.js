const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');

router.use(homeController);
router.use('/cubes', cubeController);
router.use('/accessories', accessoryController);
router.get('*', (req,res) => {
    //res.render(404);
    res.redirect('/404');
});

module.exports = router;