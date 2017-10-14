const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

// requiring controller
const petController = require('./controllers/petApp')


// setting view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// allow parsing of req.body
app.use(bodyParser.urlencoded({extended: false}));

//pointing to public asset folder
app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use('/pet', petController);

//setting port to listen on
app.listen(3000, () => {
	console.log('Listening on port 3000')
});