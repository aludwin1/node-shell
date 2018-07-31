let request = require("request");

function curl(func, url) {
    request(url, function(error, response, body) {
        func(`error: ${error}`); // Print the error if one occurred
        func(`statusCode: ${response} ${response.statusCode}`); // Print the response status code if a response was received
        func(`body: ${body}`); // Print the HTML for the Google homepage.
    });
}

module.exports = curl;
