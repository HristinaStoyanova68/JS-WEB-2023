const router = require('express').Router();

const cryptoManager = require('../managers/cryptoManager');
const Crypto = require('../models/Crypto');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', (req, res) => {
    res.render('crypto/create');
});

router.post('/create', async (req, res) => {
    const { name, imageUrl, price, description, paymentMethod} = req.body;

    try {
        await cryptoManager.create({ name, imageUrl, price, description, paymentMethod, owner: req.user._id });

        res.redirect('/crypto/catalog');
    } catch (err) {
        res.render('crypto/create', { error: extractErrorMessages(err) });
    }
});

router.get('/catalog', async (req, res) => {
    
    try {
        const cryptos = await cryptoManager.getAll().lean();
        const hasCryptos = cryptos.length;
    
        res.render('crypto/catalog', { cryptos, hasCryptos });
    } catch (err) {
        res.redirect('/', { error: extractErrorMessages(err) });    
    }
});

router.get('/catalog/:cryptoId/details', async (req, res) => {
    try {
        const cryptoId = req.params.cryptoId;
        const crypto = await cryptoManager.getCryptoById(cryptoId).lean();
        const isOwner = req.user?._id == crypto.owner._id;
        const hasBought = crypto.buyCrypto.find(x => x.owner._id == req.user?._id);
    
        res.render('crypto/details', { crypto, isOwner, hasBought });
    } catch (err) {
        const cryptos = await cryptoManager.getAll().lean();
        const hasCryptos = cryptos.length;

        res.redirect('/crypto/catalog', { error: extractErrorMessages(err), cryptos, hasCryptos }); 
    }
});

// router.get('/:photoId/delete', async (req, res) => {
//     const photoId = req.params.photoId;

//     try {
//         await photoManager.delete(photoId);

//         res.redirect('/photos/catalog');
//     } catch (err) {
//         const photo = await photoManager.getPhotoById(photoId).lean();
//         const isOwner = req.user?._id == photo.owner._id;

//         res.render('photos/details', { error: 'Unseccessfully photo deletion', photo, isOwner });
//     }
// });

// router.get('/:photoId/edit', async (req, res) => {
//     const photoId = req.params.photoId;
//     const photo = await photoManager.getPhotoById(photoId).lean();

//     res.render('photos/edit', { photo });
// });

// router.post('/:photoId/edit', async (req, res) => {
//     const photoId = req.params.photoId;
//     const photoData = req.body;

//     try {
//         await photoManager.edit(photoId, photoData);

//         res.redirect(`/photos/catalog/${photoId}/details`);
//     } catch (err) {
//         res.render('photos/edit', { photoData, error: 'Unsuccessfully updated photo' });
//     }
// });

// router.post('/catalog/:photoId/comments', async (req, res) => {
//     const photoId = req.params.photoId;
//     const { comment } = req.body;
//     const userId = req.user._id;

//     await photoManager.addComment(photoId, {user: userId, comment});

//     res.redirect(`/photos/catalog/${photoId}/details`);
// });

module.exports = router;