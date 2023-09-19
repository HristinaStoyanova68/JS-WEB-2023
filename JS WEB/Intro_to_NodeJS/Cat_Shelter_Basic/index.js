const http = require('http');
const port = 3000;

const homePage = require('./templates/home');
const cats = require('./data/cats.json');
const siteCss = require('./templates/site.css');
const addBreedPage = require('./templates/addBreed');
const addBreedHandler = require('./handlers/addBreedHandler');

http.createServer((req, res) => {
    

    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        res.write(homePage(cats));
    } else if (req.url == '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });

        res.write(siteCss);
    } else if (req.url == '/cats/add-breed') {
        res.write(getLitHtml().then(html => html`${addBreedPage(addBreedHandler)}`));
    }
    
    res.end();
}).listen(port);

async function getLitHtml() {
    const lit = await import('lit-html');

    return lit.html;
}

console.log('It is working...');