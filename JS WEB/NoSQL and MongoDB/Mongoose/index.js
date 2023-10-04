const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const connectionStr = 'mongodb://127.0.0.1:27017';

async function connectDb() {
    await mongoose.connect(connectionStr);

    console.log('DB connected successfully');

    // const cats = await Cat.find();

    // //instance model method
    // cats.forEach(cat => cat.greet());

    // //virtual property
    // cats.forEach(cat => console.log(cat.info)); 

    // //static model method
    // const result = await Cat.giveMeCats();
    // console.log(result);

    //Read
    //const cats = await Cat.find({breed: 'Angora});
    //const cats = await Cat.findOne({breed: 'Angora});
    //const cats = await Cat.findById('123456');

    //Create
    //1:
    // const newCat = new Cat({
    //     name: 'Zuza',
    //     age: 9,
    //     breed: 'Persian'
    // });

    // await newCat.save();

    //2:
    const newCat = await Cat.create({
            name: 'Aya',
            age: 10,
            breed: 'Angora'
        })
    console.log(newCat);
    
}

connectDb();