const express = require('express');
const validator = require('validator');

const { isAgeValid } = require('./utils/validations');
const { validateName } = require('./middlewares/middlewares');

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
    <form method="POST">
    <label for="name">Name</label>
    <input type="text" name="name" id="name">

    <label for="age">Age</label>
    <input type="number" name="age" id="age">

    <label for="password">Password</label>
    <input type="password" name="password" id="password">

    <input type="submit" value="create"/>
</form>
    `);
});

app.post('/', validateName, (req, res) => {
    const { name, age, password } = req.body;

    if (!isAgeValid(age)) {
        return res.send('Invalid age!');
    }

    if (!validator.isStrongPassword(password)) {
        return res.send('Weak password!');
    }

    console.log(name, age);

    res.send('Successfull');
});

app.listen(port, () => console.log(`Server is listening on port: ${port}...`));