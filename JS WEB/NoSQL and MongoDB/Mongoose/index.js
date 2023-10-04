const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const connectionStr = 'mongodb://127.0.0.1:27017';

async function connectDb() {
    await mongoose.connect(connectionStr);

    console.log('DB connected successfully');

    const cats = await Cat.find();

    console.log('y');
    console.log(cats);

    cats.forEach(cat => cat.greet());
}

connectDb();