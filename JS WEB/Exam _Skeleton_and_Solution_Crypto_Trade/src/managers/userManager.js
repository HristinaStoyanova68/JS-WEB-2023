const User = require('../models/User');

const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const {SECRET} = require('../config/config');

exports.register = async (userData) => {
    const user = await User.findOne({username: userData.username});

    if (user) {
        throw new Error('Username already exists!');
    }

    return User.create(userData);

    //if is necessary to be logged directly

    // const createdUser = await User.create(userData);

    // const token = await generateToken(createdUser, SECRET);

    // return token;
}

exports.login = async (email, password) => {
    //TODO find user by username
    const user = await User.findOne({email});

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    //TODO validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    }

    const token = await generateToken(user, SECRET);

    return token;
}