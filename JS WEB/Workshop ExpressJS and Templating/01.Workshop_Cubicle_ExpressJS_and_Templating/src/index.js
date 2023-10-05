const express = require('express');
//const handlebars = require('express-handlebars'); 
//const path = require('path');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);
app.use(routes);

//Express config
// app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(express.static('src/public'));

// //Handlebars config
// app.engine('hbs', handlebars.engine({
//     extname: 'hbs',
    
// }));
// app.set('view engine', 'hbs');
// app.set('views', 'src/views');

//Routes
// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/', homeController.getHome);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));