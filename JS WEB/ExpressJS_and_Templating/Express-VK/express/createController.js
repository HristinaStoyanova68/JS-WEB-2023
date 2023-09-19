const { Router } = require('express');
const { route } = require('./catalogController');

const router = Router();

router.get('/', (req, res) => {
    res.send('<form method="POST"><input name="name"><button>Send</button></form>')
});

router.post('/', (req, res) => {
        //res.status(201).send('Item created');
        res.redirect('/catalog');
    });

module.exports = router;