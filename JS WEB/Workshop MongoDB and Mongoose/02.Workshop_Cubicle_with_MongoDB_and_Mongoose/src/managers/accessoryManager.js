const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

exports.create = (accessorydata) => Accessory.create(accessorydata);