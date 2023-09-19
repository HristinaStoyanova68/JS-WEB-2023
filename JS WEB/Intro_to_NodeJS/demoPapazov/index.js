const http = require('http');
const fs = require('fs');

let app = http.createServer((req, res) => {

    console.log(req.url);

    if (req.url == '/') {
        res.write('<h1>Homepage</h1> <a href="/cats">cats</a>');
        res.end();

    } else if (req.url == '/cats') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        let result = fs.readFileSync('./views/cats.html');

        res.write(result);
        res.end();


    } else if (req.url == '/img/cat.jpg') {
        res.writeHead(200, {
            'Content-Type': 'image/jpeg'
        });

        //TODO finish with streams
        let catStream = fs.createReadStream('./img/cat.jpg');

        // catStream.on('data', (chunk) => {
        //     res.write(chunk);
        // });

        // catStream.on('end', () => {
        //     res.end();
        // });

        catStream.pipe(res);
    }
    else {
        res.write('Error page 404');
        res.end();

    }
});

app.listen(5000);

console.log('Node.js server is running on port 5000...');