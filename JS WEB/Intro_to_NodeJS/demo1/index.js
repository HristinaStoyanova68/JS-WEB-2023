const http = require ('http');

const homePage = `
<!DOCTYPE html>
<html lang="en">
<body>
<a href="/about">About</a>
     <h1>Home Page</h1>
     <p>Hello World!</p>
</body>
</html>`;

const aboutPage = `
<!DOCTYPE html>
<html lang="en">
<body>
<a href="/">Home</a>
     <h1>About Us</h1>
     <p>Contact Us: 1-555-1968</p>
</body>
</html>`;

const server = http.createServer((request, response) => {
    console.log('Request Received');
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);


    if (request.url == '/') {
        //optional:
        // response.writeHead(200, [
        //     'Content-Type', 'text/plain'
        // ])
        response.write(homePage);
        response.end();
    } else if (request.url == '/about') {
        response.write(aboutPage);
        response.end();
    } else {
        response.statusCode = 404;
        response.end();

    }
    
});

server.listen(3000);