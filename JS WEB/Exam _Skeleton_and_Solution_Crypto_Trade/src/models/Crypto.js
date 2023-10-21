const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
    paymentMethod: {
        type: String,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        required: [true, 'Payment method is required!'],
    },
    buyCrypto: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            }
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Crypto = new mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;