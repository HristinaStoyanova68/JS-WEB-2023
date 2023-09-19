const fs = require('fs');
const fsPromise = require('fs/promises');
//sync
// let text = fs.readFileSync('./index.html', {encoding: 'utf8'});
// console.log(text);

//async
// fs.readFile('./index.html', 'utf8', (err, text) => {

//     if (err) {
//         return;
//     }
//     console.log(text);

// });
//Promise
// fsPromise.readFile('./index.html', 'utf8')
//     .then(text => {
//         console.log(text);
//     });

    //Async function

    async function readFile(path) {
        let text = await fsPromise.readFile(path, 'utf8');

        console.log(text);
    
    }
    readFile('./index.html');

console.log('end');
