const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function getGiphy(values){
    const link = 'http://api.giphy.com/v1/gifs/search?q=' + values + '&api_key=wjgKcH3h3opPNZRxUXNJAkSLAP07Ef86&limit=3=';
        /*Giphy api key=wjgKcH3h3opPNZRxUXNJAkSLAP07Ef86*/
    xhr.open('GET', link, false);

    var output = [];
    xhr.onreadystatechange=function(){
        if (this.readyState === 4){
            var giphy = JSON.parse(xhr.responseText);
            for (var i = 0; i < 3; i++){
                output.push(giphy.data[i].images.downsized.url);
            };
        };
    };
    xhr.send();

    output = output;

    return output;
}


function view(templateName, values, response) {
    console.log("Hello!");
    //pročitala template file    
        var data = fs.readFileSync('./views/' + templateName + '.html').toString();

    //zamjenila params.
    if (Object.keys(values).length > 0){

        data = getGiphy(values, data);
        //data = merge(values, data);
    }
    //ispisati response
    response.write(data);
}

module.exports.getGiphy = getGiphy;