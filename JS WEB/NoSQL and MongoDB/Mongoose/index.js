const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const connectionStr = 'mongodb://127.0.0.1:27017';

async function connectDb() {
    await mongoose.connect(connectionStr);

    console.log('DB connected successfully');

    const cats = await Cat.find();

    console.log('y');
    console.log(cats);

    //using method property
    cats.forEach(cat => cat.greet());

    //using virtual property
    cats.forEach(cat => console.log(cat.info)); 
}

connectDb();