const Furniture = require('../models/Furniture');

exports.getAll = async (qs) => {

//{
    // const where = query.where;
    // console.log(where);

    // if (where) {
    //     let [fieldName, ownerId] = where.split('=');

    //     ownerId = ownerId.replaceAll('"', '');
    //     console.log(ownerId);
    // }

    // const result = await Furniture.find();


    // return result;

    //(queryString)
    let query = Furniture.find();

    if (qs.where) {
        let [fieldName, ownerId] = qs.where.split('=');
        ownerId = ownerId.replaceAll('"', '');

        // query = query.find({_ownerId: ownerId});
        query = query.where('_ownerId').eq(ownerId);
    }

    const result = await query;

    return result;
};

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.update = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);

