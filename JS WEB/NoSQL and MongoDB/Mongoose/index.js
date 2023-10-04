const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const Person = require('./models/Person');

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
    // const newCat = await Cat.create({
    //         name: 'Aya',
    //         age: 10,
    //         breed: 'Angora'
    //     });

    //update method 1:
    // const aya = await Cat.findOne({name: 'Aya'});
    // aya.age = 12;
    // await aya.save();

    //update method 2: native mongoDb
    // await Cat.updateOne({name: 'Aya'}, {$set: {age: 13}});

    //update method 3: the mongoose extension
    // await Cat.findByIdAndUpdate('123456', {$set: {age: 14}});

    //delete method 1:
    // await Cat.deleteOne({name: 'Aya'});

    //delete method 2:
    // await Cat.findByIdAndDelete('651d5edffd54507cfb644431');

    //console.log(newCat);

    //creating collection if the first record is non existent collection(creating a new collection)
    // await Person.create({
    //     name: 'Pesho',
    //     age: 25
    // });

    // await Person.deleteOne({name: 'Pesho'});

    
}

connectDb();