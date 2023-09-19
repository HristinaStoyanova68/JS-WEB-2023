const express = require('express');
const hbr = require('express-handlebars');

const port = 3000;

const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    // res.send('ok');
    res.render('<h1>Hello there</h1>');
})

app.listen(port, () => console.log(`app is running on port: ${port}...`));

