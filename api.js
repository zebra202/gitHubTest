const http = require('http');



function getApi(name), callback {
    let link = 'http://nikola-breznjak.com/_testings/ajax/test1.php?ime=' + name;
    http.get(link, (response) => {
        console.log(response.statusCode);

        let body = '';
        response.on('data', (data) => {
            body += data.toString();
        });

        response.on('end', () => {
            try {
                callback(body);
            } catch (error) {
                callback('Nemrem parsati json!');
            }
        });
    }).on('error', error => {
        callback(error.message);
    });
}

module.exports.get = getApi;
module.exports.test = test;