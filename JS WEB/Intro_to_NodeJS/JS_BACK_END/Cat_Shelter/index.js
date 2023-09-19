const http = require('http');
const port = 3000;
const handlers = require('./resources/handlers');

http.createServer((request, response) => {
    // response.writeHead(200, {
    //     'Content-Type': 'text/plain',
    // });

    // response.write('Hello JS World');
    // response.end();

    for (let handler of handlers) {
        if (handler(request, response)) {
            break;
        }
    }
}).listen(port);

console.log('It is working...');