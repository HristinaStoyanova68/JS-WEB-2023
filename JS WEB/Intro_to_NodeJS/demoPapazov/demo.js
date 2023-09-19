const uniqid = require('uniqid');

const utils = require('./utils');
const url = require('url');

let someUrl = 'https://www.google.bg/?gws_rd=ssl';
let paresedUrl = url.parse(someUrl);
console.log(paresedUrl);
console.log('Hello world!');
console.log(uniqid());

console.log(utils.calc(2, 10));
console.log(utils.div(10, 5));