const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        match: /^[A-Za-z0-9]+$/,
        unique: true,
    },
    password: {
        type: String,
        // validate: {
        //     validator: function(value) {
        //         return this.repeatPassword === value;
        //     },
        //     message: 'Password missmatch!',
        // }
    },
});

//TODO validate if user exist

userSchema.virtual('repeatPassword').set(function(value) {
    if (value !== this.password) {
        throw new mongoose.MongooseError('Password missmatch!');
    }
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;