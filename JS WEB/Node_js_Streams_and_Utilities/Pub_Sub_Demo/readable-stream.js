const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('./index.html', {
    encoding: 'utf8',
    highWaterMark: 1024,
});

const writableStream = fs.createWriteStream('output.txt');
const gzip = zlib.createGzip();
// readableStream.on('data', function(chunk) {
//     console.log('NEW CHUNK');
    
//     writableStream.write(chunk);
// });

// readableStream.on('end', () => {
//     console.log('Streem ended');
//     writableStream.end();
// });

// writableStream.on('finish', () => {
//     console.log('finish');
// });

readableStream.pipe(gzip).pipe(writableStream);