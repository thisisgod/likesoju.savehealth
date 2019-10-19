module.exports.function = function action4(foodName, startIdx, request) {
  let returnAction4 = new Object();
  const search = require('./lib/SearchAction.js');
  if (request == "Good") {
    returnAction4 = search.searchAction4(foodName, startIdx);
  }else{
    returnAction4 = search.searchAction4_harmful(foodName, startIdx);
  }
  return returnAction4;
}
