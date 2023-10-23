const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);

        // const user = await userManager.register(req.body);

        // res.json({
        //     email: user.email,
        //     accessToken: 'no token',
        //     _id: user._id,
        // });

        const result = await userManager.register(req.body);

        res.json(result);

    } catch (err) {
        console.log(err);

        res.status(400).json({
            message: 'Some Error'
        });
    }

    // const {email, password} = req.body;

    // res.end();
});

router.post('/login', async (req, res) => {

    try {
        const result = await userManager.login(req.body);

        res.json(result);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
});

router.get('/logout', (req, res) => {

    //TODO Invalidate token
    
    res.end();
})

module.exports = router;
