const router = require('express').Router();

const photoManager = require('../managers/photoManager');
const Photo = require('../models/Photo');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', (req, res) => {
    res.render('photos/create');
});

router.post('/create', async (req, res) => {
    const { name, age, description, location, imageUrl } = req.body;

    try {
        await photoManager.create({ name, age, description, location, imageUrl, owner: req.user._id });

        res.redirect('/photos/catalog');
    } catch (err) {
        res.render('photos/create', { error: extractErrorMessages(err) });
    }
});

router.get('/catalog', async (req, res) => {
    const photos = await photoManager.getAll().lean();

    res.render('photos/catalog', {photos});
});

router.get('/catalog/:photoId/details', async (req, res) => {
    const photoId = req.params.photoId;
    const photo = await photoManager.getPhotoById(photoId).lean();
    const isOwner = req.user?._id == photo.owner._id;

    res.render('photos/details', {photo, isOwner});
});

router.get('/:photoId/delete', async (req, res) => {
    const photoId = req.params.photoId;

    try {
        await photoManager.delete(photoId);
    
        res.redirect('/photos/catalog');
    } catch (err) {
    const photo = await photoManager.getPhotoById(photoId).lean();
    const isOwner = req.user?._id == photo.owner._id;

        res.render('photos/details', {error: 'Unseccessfully photo deletion', photo, isOwner});
    }
})

module.exports = router;