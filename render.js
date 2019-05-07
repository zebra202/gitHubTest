const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function getGiphy(values){
//    var XMLHttpRequest = require('xhr2');
//    var xhr = new XMLHttpRequest();
    const link = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wjgKcH3h3opPNZRxUXNJAkSLAP07Ef86&limit=3=$' + values;
    /*Giphy api key=wjgKcH3h3opPNZRxUXNJAkSLAP07Ef86*/
    xhr.open('GET', link, false);

    var output = '';
    xhr.onreadystatechange=function(){
        if (this.readyState === 4){
            var giphy = JSON.parse(xhr.responseText);
            for (var i = 0; i < 3; i++){
                output += '<figure class="image is-128x128"><img src="' + giphy.data[i].images.downsized.url + '"></figure>';
            };
        };
    };
    xhr.send();

    return output;
}


function view(templateName, values, response) {
    console.log("Hello!");
    //pročitala template file    
        var data = fs.readFileSync('./views/' + templateName + '.html').toString();

        console.log(data);

    //zamjenila params.
    if (Object.keys(values).length > 0){

        data = getGiphy(values, data);
        //data = merge(values, data);
    }
    //ispisati response
    response.write(data);
}

module.exports.getGiphy = getGiphy;