const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Product Page');
});

router.get('/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send('Product Details Page');
});

router.get('/:category/:id', (req, res) => {
    console.log(req.params);
    res.send('Nested Parameters');
});

module.exports = router;