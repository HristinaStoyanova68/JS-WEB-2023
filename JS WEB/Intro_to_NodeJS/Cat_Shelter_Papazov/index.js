const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const storageService = require('./sevices/storageService.js');

const app = http.createServer((req, res) => {
    if (req.url == '/') {
        let content = fs.readFileSync('./views/home/index.html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write(content);
        res.end();


    } else if (req.url == '/styles/site.css') {
        let cssContent = fs.readFileSync('./styles/site.css');
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        res.write(cssContent);
        res.end();

    } else if (req.url == '/js/script.js') {
        let js = fs.readFileSync('./js/script.js');
        res.writeHead(200, {
            'Content-Type': 'text/javascript'
        });

        res.write(js);
        res.end();


    } else if (req.url == '/cats/add-cat') {
        console.log(req.method);
        if (req.method == 'GET') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            fs.readFile('./views/addCat.html', 'utf8', (err, result) => {
                if (err) {
                    res.statusCode = 404;
                    return res.end();
                }

                let breeds = [
                    'Persian',
                    'Angora',
                    'Prety cat'
                ];

                let mappedBreeds = breeds.map(x => `
                <option value="${x}">${x}</option>
                `)
                result = result.replace('{{breeds}}', mappedBreeds);
                res.write(result);
                res.end();
            });
        } else if (req.method == 'POST') {
            let form = new formidable.IncomingForm();

            form.parse(req, (err, fields, files) => {

                // console.log(fields);
                // console.log(files);
                storageService.saveCat(fields)
                .then(() => {
                    console.log('end');
                    res.end();

                })
                .catch(err => {
                    console.log('err');
                    console.log(err);
                });

                res.writeHead(302, {
                    "Location": '/'
                });
                res.end();

            })

            // console.log(Object.keys(req));
            // console.log(req.headers);
            // console.log(req.trailers);
            // res.write('GOOD JOB')

        }


    } else {
        res.statusCode = 404;
        res.write('Error page 404');
        res.end();

    }



});

app.listen(5000);

console.log('App is listening on port 5000...');