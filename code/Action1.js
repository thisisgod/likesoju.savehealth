module.exports.function = function action1(bodyName, startIdx, request) {
  let returnAction1 = new Object(); 
  const search = require('./lib/SearchAction.js');
  if(request == "Good"){
    returnAction1 = search.searchAction1(bodyName, startIdx);
  }else{
    returnAction1 = search.searchAction1_harmful(bodyName, startIdx);
  }
  return returnAction1;
}
