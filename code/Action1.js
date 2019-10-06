
var http = require('http');

module.exports.function = function action1 (bodyName, request) {
  let options = {
    format: 'json'
  };
  let response = http.getUrl('http://b48c5138.ngrok.io/food', options);
  let oilValue = response.name;
  return {}
}
