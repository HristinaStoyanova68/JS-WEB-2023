const router = require('express').Router();

const furnitureManager = require('../managers/furnitureManager');

router.get('/', async (req, res) => {

    // console.log();

    const furnitures = await furnitureManager.getAll(req.query);


    res.json(furnitures);
})

router.post('/', async (req, res) => {

    try {
        await furnitureManager.create({
            ...req.body,
            _ownerId: req.user._id,
        });

        res.status(201).end();
    } catch (err) {
        
        res.status(400).json({
            message: err.message,
        });
    }
});

router.get('/:furnitureId', async (req, res) => {
    const furniture = await furnitureManager.getOne(req.params.furnitureId);

    res.json(furniture);
});

router.put('/:furnitureId', async(req, res) => {
    // const updatedFurniture = await furnitureManager.update(req.params.furnitureId, req.body);
    // console.log(updatedFurniture);
    
    await furnitureManager.update(req.params.furnitureId, req.body);

    res.status(204).end();
});

router.delete('/:furnitureId', async (req, res) => {
    await furnitureManager.delete(req.params.furnitureId);

    res.status(200).end();
})

module.exports = router;
