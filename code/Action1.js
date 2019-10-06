module.exports.function = function action1 (bodyName, request) {
  const http = require('http');
  const console = require('console');
  let options = {
    format: 'json',
    query: {
      bodyName: bodyName
    }
  };
  let response = http.getUrl('http://151b5c2d.ngrok.io/food', options);
  let data = response;
  let returnAction1 = new Array();
  let i;
  for(i=0; i<3; i++){
    returnAction1[i] = data[i];
    if(i == 3) break;
  }
  console.log(data);
  console.log(returnAction1);
  return returnAction1;
}
