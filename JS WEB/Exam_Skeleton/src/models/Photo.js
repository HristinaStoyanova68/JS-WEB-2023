const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name must be more than 10!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age must be more than 1!'],
        max: [100, 'Age must be less than 100!'],

    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description must be more than 5!'],
        maxLength: [50, 'Description must be less than 50!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Location must be more than 5!'],
        maxLength: [50, 'Location must be less than 50!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^((http:\/\/)|(https:\/\/))[\w]+/, 'Image URL must be reffering to actual picture!'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        comment: {
            type: String,
            required: [true, 'Comment is required!'],
        }
    }]
});

const Photo = new mongoose.model('Photo', photoSchema);

module.exports = Photo;


// name – string (required)
// • image – string (required)
// • age – number (required)
// • description – string (required)
// • location – string (required)
