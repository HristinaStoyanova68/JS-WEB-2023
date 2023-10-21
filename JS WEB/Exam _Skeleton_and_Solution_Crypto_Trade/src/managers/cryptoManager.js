const Crypto = require('../models/Crypto');

exports.getAll = () => Crypto.find().populate('owner');

exports.getCryptoById = (cryptoId) => Crypto.findById(cryptoId).populate('owner').populate('buyCrypto.user');

exports.create = (cryptoData) => Crypto.create(cryptoData);
    
exports.edit = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData);

// exports.addComment = async (cryptoId, commentData) => {
//     const photo = await Crypto.findById(cryptoId);

//     photo.comments.push(commentData);

//     return photo.save();

// }

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);