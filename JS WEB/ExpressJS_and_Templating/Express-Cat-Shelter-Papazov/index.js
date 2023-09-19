const express = require('express');
const path = require('path');
const fs = require('fs');
const handlebars = require('express-handlebars');

const app = express();
const port = 5000;

app.engine('hbs', handlebars({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //Custom HTML response:
    // // res.header({
    // //     'Content-Type': 'text/html'
    // // });

    // // res.write(`
    // // <h1>Home</h1>
    // // <ul>
    // // <li><a href="/addBreed">Add Breed</a></li>
    // // <li><a href="/addCat">Add Cat</a></li>
    // // </ul>
    // // `);
    // // res.end();

    // // let absolutePath = path.join(__dirname, '/views/home/index.html');
    // let absolutePath = path.resolve(__dirname, './views/home/index.html');
    // res.sendFile(absolutePath);

    //renderv with handlebars
    res.render('home');
});

app.get('/add-breed', (req, res) => {
    // res.header({
    //     'Content-Type': 'text/html'
    // });

    // res.write('<h1>Add Breed</h1>');
    // res.end();

    res.render('addBreed');
});

app.get('/addCAt', (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    });

    res.write('<h1>Add Cat</h1>');
    res.end();
});

app.get('/cat/:catName', (req, res) => {

    if (req.params.catName == 'Navico') {
        return res.redirect('/cat/navcho');
    }
    res.header({
        'Content-Type': 'text/html'

    });

    res.write(`<h1>Cat Profile</h1><h2>${req.params.catName}</h2>`);
    res.end();
});

app.get('/download', (req, res) => {
    // res.header({
        // 'Content-Disposition': 'attachment; filename="cute-cat.jpg"'
    // });

    // let imageStream = fs.createReadStream('./images/cute-cat.jpg');

    // imageStream.pipe(res);

    res.download('./images/cute-cat.jpg');

});

app.get('/send-file', (req, res) => {
    res.sendFile('./images/cute-cat.jpg', {
        root: __dirname
    })
})

app.get('/data', (req, res) => {

    res.json({name: 'Navcho', age: 6})
});

app.get('/add*', (req, res) => {
    res.write('Add something else');
    res.end();
})
app.listen(port, () => console.log(`app is running on port: ${port}...`));