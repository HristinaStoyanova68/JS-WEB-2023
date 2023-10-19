const { MongooseError } = require('mongoose');

exports.extractErrorMessages = (error) => {
    // if (error instanceof MongooseError) {
    //     return Object.values(error.errors).map(x => x.message);
    // } else if (error) {
    //     return [error.message];
    // }

    if (error.code === 11000) {
        return ['This username already exists'];
    } 

    if (error instanceof MongooseError) {
            return Object.values(error.errors).map(x => x.message);
    }

    return [error.message];
}