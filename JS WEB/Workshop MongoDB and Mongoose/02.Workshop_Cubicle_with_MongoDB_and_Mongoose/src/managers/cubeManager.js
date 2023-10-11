const Cube = require('../models/Cube');

const uniqid = require('uniqid');

const cubes = [
    {
        id: '1n73sh8holhz66elc',
        name: 'Mirror Cube',
        description: 'A cool mirror cube',
        imageUrl: 'https://logicbg.com/wp-content/uploads/2022/02/rubik-kub-Mirror-Cube-3h3-QiYi-Speed-Cube.jpg.webp',
        difficultyLevel: 4
    },
    {
        id: '2n73sh8holaz66elc',
        name: 'Rubik Classic',
        description: 'Evergreen',
        imageUrl: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk3MDg5MjU5NDA3MDI1MjM1/rubik-cube-algorithms.png',
        difficultyLevel: 3
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);
    
    await cube.save();

    return cube;
};