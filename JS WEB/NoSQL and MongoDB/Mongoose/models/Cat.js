const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    breed: String
});

//two ways to use method/s property
//1:
// catSchema.method('greet', function () {
//     console.log(`Hello I\'m cat and my name is ${this.name}`);
// });

//2:
catSchema.methods.greet = function () {
    console.log(`Hello I\'m cat and my name is ${this.name}`);
};

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
