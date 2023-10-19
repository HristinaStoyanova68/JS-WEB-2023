const bcrypt = require('bcrypt');

const jwt = require('../lib/jwt');
const User = require('../models/User');
const {SECRET} = require('../config/config');

exports.register = async (userData) => {
    const user = await User.findOne({username: userData.username});

    if (user) {
        throw new Error('Username already exists!');
    }

    return User.create(userData);
}

exports.login = async (username, password) => {
    //TODO find user by username
    const user = await User.findOne({username});

    if (!user) {
        throw new Error('Cannot find username or password!');
    }

    //TODO validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Cannot find username or password!');
    }

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    }

    const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});

    //TODO return user
    return token; 
}