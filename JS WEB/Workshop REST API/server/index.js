const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const {auth} = require('./middlewares/authMiddleware');

const app = express();
const PORT = 3030;

mongoose.connect('mongodb://127.0.0.1:27017/furnitures')
.then(() => console.log('DB Connected...'))
.catch(err => console.log(err));

// app.get('/', (req, res) => {

//     res.send('hello world1')
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);

// app.use((req, res, next) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PU, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//     next();
// });

app.use(routes);

app.listen(PORT, () => console.log(`RESTful server is listening on port: ${PORT}...`));