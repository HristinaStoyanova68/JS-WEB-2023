const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    location: {
        type: String,
        required: [true, 'Location is required!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!']
    },
});

const Photo = new mongoose.model('Photo', photoSchema);

module.exports = Photo;


// name – string (required)
// • image – string (required)
// • age – number (required)
// • description – string (required)
// • location – string (required)
