const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required!'],
        minLength: [5, 'Username is too short!'],
        match: [/^[A-Za-z0-9]+$/, 'Username must be alphanumeric!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: function(value) {
                // return this.repeatPassword === value;
                return /^[A-Za-z0-9]+$/.test(value);
            },
            message: 'Invalid password characters!',
        },
        minLength: [8, 'Password is too short!'],
    }, 
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(value);
            }
        }
    }
});

userSchema.virtual('repeatPassword').set(function(value) {
    if (value !== this.password) {
        throw new Error('Password missmatch!');
    }
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;