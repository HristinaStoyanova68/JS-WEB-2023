const router = require('express').Router();

const userManager = require('../managers/userManager');
const { extractErrorMessages } = require('../utils/errorHelpers');
const { TOKEN_KEY } = require('../config/config');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await userManager.register({username, email, password, repeatPassword});

        res.redirect('/');

        //if is necessary to be logged directly

        // const token = await userManager.register({ username, email, password, repeatPassword });

        // res.cookie(TOKEN_KEY, token, { httpOnly: true });

        // res.redirect('/');
    } catch (err) {
        
        res.render('users/register', { error: extractErrorMessages(err), username, email });

    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userManager.login(email, password);

        res.cookie(TOKEN_KEY, token, { httpOnly: true });

        res.redirect('/');

    } catch (err) {

        res.render('users/login', { error: extractErrorMessages(err) });

    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_KEY);
    res.redirect('/');
})

module.exports = router;