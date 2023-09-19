const breeds = require('../data/breeds.json');

module.exports = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const breed = formData.get('breed');

    breeds.push(JSON.stringify({breed}));
    //await addBreed(breed);
}

// async function addBreed(breed) {
//     const res = await fetch('/data/breeds.json', {
//         method: 'POST',
//         header: {'Content-Type': 'application/json'},
//         body: JSON.stringify(breed)
//     });

//     return res.json();
// }