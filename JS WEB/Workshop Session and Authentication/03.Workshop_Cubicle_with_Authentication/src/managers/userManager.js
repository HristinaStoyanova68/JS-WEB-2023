const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    //TODO find user
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Cannot find username or password!');
    }

    //TODO validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Cannot find username or password!');
    }

    //TODO return user
    return user;
};

