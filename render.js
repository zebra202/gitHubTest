
const fs = require('fs');

function merge(values, data){
    for (var key in values){
        data = data.replace('{{' + key + '}}', values[key]);
    }
    return data;
}

function getGiphy(values, data){
    for (var key in values){
        var link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=$' + values[key];
    }
    
   var output = '';
    $.getJSON(link, function(giphy){
        $.each(giphy.data, function(ind, dataG){
            var img = dataG.images.downsized.url;
        
            output += `<img src="${img}"/>`;

        });
    });
    console.log('link: ' + output);
}


function view(templateName, values, response) {
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

module.exports.view = view;