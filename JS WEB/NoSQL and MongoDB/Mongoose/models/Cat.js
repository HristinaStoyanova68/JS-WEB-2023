const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [3, 'Custom min length message'],
        maxLegth: [20, 'Custom max length message']
    },
    age: Number,
    breed: String
});

//two ways to use method/s property -instance model method
//1:
// catSchema.method('greet', function () {
//     console.log(`Hello I\'m cat and my name is ${this.name}`);
// });

//2:
catSchema.methods.greet = function () {
    console.log(`Hello I\'m cat and my name is ${this.name}`);
};

//virtual property
catSchema.virtual('info').get(function () {
    return `My name is ${this.name} am I\'m ${this.age} years old.`
});


//static model method
catSchema.static('giveMeCats', function () {
    return this.find();
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
