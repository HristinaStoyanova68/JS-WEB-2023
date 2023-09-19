const express = require('express');
const catalogController = require('./catalogController');
const createController = require('./createController');
const logger = require('./logger');

const app = express();
const port = 5000;

app.use('/static', express.static('public'));

// app.get('/', (req, res) => {
//     // res.send('Hello there');
//     res.sendFile(__dirname + '/index.html');
// });

app.use(logger());

app.use('/create', createController);
// app.post('/create', (req, res) => {
//     console.log('Here is your request');
//     res.end();
// });

app.use('/catalog', catalogController);

// app.get('/catalog/', (req, res) => {
//     res.send('Product Page');
// });

// app.get('/catalog/*', (req, res) => {
//     res.send('Product Details Page');
// });

// app.get('/catalog/:productId', (req, res) => {
//     console.log(req.params.productId);
//     res.send('Product Details Page');
// });

// app.get('/catalog/:category/:id', (req, res) => {
//     console.log(req.params);
//     res.send('Nested Parameters');
// });

app.get('/data', (req, res) => {
    res.json([{
        name: 'Pesho',
        age: 22,
        mobileNumber: 35988223344,
    },
    {
        name: 'Ivan',
        age: 25,
        mobileNumber: 35988223355,
    }]);
})

app.get('catalog', () => {

})


app.all('*', (req, res) => {
    // res.status(404).send('404 Not Found(Custom Page)');
    res.send('Using express v4');
})
app.listen(port, () => console.log(`app is running on port: ${port}...`));

