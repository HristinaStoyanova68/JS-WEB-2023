const router = require('express').Router();

const userManager = require('../managers/userManager');
const photoManager = require('../managers/photoManager');
const { extractErrorMessages } = require('../utils/errorHelpers');
const { TOKEN_KEY } = require('../config/config');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        const token = await userManager.register({ username, email, password, repeatPassword });

        res.cookie(TOKEN_KEY, token, { httpOnly: true });

        res.redirect('/');
    } catch (err) {
        
        res.render('users/register', { error: extractErrorMessages(err), username, email });

    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await userManager.login(username, password);

        res.cookie(TOKEN_KEY, token, { httpOnly: true });

        res.redirect('/');

    } catch (err) {

        res.render('users/login', { error: extractErrorMessages(err) });

    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_KEY);
    res.redirect('/');
});

router.get('/:userId/profile', async (req, res) => {
    const userId = req.params.userId;

    const user = await userManager.getUserById(userId).lean();

    const photos = (await photoManager.getAll().lean()).filter(x => x.owner._id == userId);

    const photosAmount = photos.length;

    res.render('users/profile', {user, photos, photosAmount});
})

module.exports = router;