module.exports.function = function action4 (foodName, startIdx) {
  const console = require('console');
  const http = require('http');
  let options = {
    format: 'json',
    query: {
      foodName: foodName
    }
  };
  let response = http.getUrl('http://151b5c2d.ngrok.io/food', options);
  let data = response;
  let returnAction4 = new Array();
  let returnObj = new Object();
  let i
  for(i = 0; i<data.length; i++){
    returnObj.id = data[i].id;
    returnObj.bodyName = data[i].bodyName;
    returnObj.foodDiscription = data[i].foodDiscription;
    returnObj.foodName = data[i].foodName;
    returnObj.index = startIdx+i;
    returnAction4.push(returnObj);
  }
  return returnAction4;
}
