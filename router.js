var render = require('./render');

function resultsRouter(req, res) {
    if (req.url === '/'){
        console.log('Tu sam');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        render.view('header', {}, res);
        render.view('search', {}, res);
        render.view('footer', {}, res);
        res.end();
    }
}

function searchRouter(req, res) {
    if (req.url.startsWith('/results')){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        var pic = req.url.replace ('/results?giphy', '');
        
        render.view('header', {}, res);
        render.view('results', {            
            giphy: pic
        }, res);
        render.view('footer', {}, res);
        res.end();
    }
}

module.exports.home = homeRouter;
module.exports.search = searchRouter;