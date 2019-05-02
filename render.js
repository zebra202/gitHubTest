
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



function merge(values, data){
    console.log("Hello!");
    for (var key in values){
        data = data.replace('{{' + key + '}}', values[key]);
    }
    return data;
}

function getGiphy(values){
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    const link = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wjgKcH3h3opPNZRxUXNJAkSLAP07Ef86&limit=3=$' + values;
    /*Giphy api key=wjgKcH3h3opPNZRxUXNJAkSLAP07Ef86*/
    xhr.open('GET', link);
    xhr.send();

    xhr.onreadystatechange=function(){
        if (this.readyState == 4){
            var giphy = JSON.parse(xhr.responseText);
            console.log(giphy.data);
        };
    };

        
/*        $.getJSON(link, function(giphy){
        $.each(giphy.data, function(ind, dataG){
            var img = dataG.images.downsized.url;
        
            output += `<img src="${img}"/>`;

        });
        }
    }

   
    });
    console.log('Output: ' + output);*/
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