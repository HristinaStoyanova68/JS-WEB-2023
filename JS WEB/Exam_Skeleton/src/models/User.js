const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required!'],
        minLength: [2, 'Username must be more than 2!'],
        match: [/^[A-Za-z0-9]+$/, 'Username must be alphanumeric!'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'Email must be more than 10!'],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(value);
            },
            message: 'Invalid email address!',
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password must be more than 10!'],
        validate: {
            validator: function(value) {
                // return this.repeatPassword === value;
                return /^[A-Za-z0-9]+$/.test(value);
            },
            message: 'Invalid password characters!',
        },
        minLength: [8, 'Password is too short!'],
    },     
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