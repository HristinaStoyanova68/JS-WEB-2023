const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

exports.create = (accessorydata) => Accessory.create(accessorydata);

exports.getRest = (accessoryIds) => Accessory.find({_id: { $nin: accessoryIds }});