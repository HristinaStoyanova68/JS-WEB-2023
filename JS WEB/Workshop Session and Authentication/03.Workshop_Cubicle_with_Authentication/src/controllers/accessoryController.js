const router = require('express').Router();

const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const { name, imageUrl, description } = req.body;

    await accessoryManager.create({ name, imageUrl, description });

    res.redirect('/');
});

module.exports = router;