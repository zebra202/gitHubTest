const express = require('express')
const exphbs  = require('express-handlebars');
const app = express();

const render = require('./render');

const hostname = '127.0.0.1';
const port = 3000;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
	var pic = render.getGiphy(req.query.giphy);
	console.log(pic);
	res.render('results');
});

app.listen(port, () => console.log(`Example app listening! ${port}!`))
