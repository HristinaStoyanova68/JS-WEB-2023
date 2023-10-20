const User = require('../models/User');

const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const {SECRET} = require('../config/config');

exports.register = async (userData) => {
    const user = await User.findOne({username: userData.username});

    if (user) {
        throw new Error('Username already exists!');
    }

    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser, SECRET);

    return token;
};

exports.login = async (username, password) => {
    //TODO find user by username
    const user = await User.findOne({username});

    if (!user) {
        throw new Error('Invalid username or password!');
    }

    //TODO validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password!');
    }

    const token = await generateToken(user, SECRET);

    return token;
};

exports.getUserById = (userId) => User.findById(userId);