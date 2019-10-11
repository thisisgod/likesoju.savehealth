module.exports.function = function action4(foodName, startIdx, request) {
  let returnAction4 = new Object(); 
  const search = require('./lib/SearchAction.js');
  returnAction4 = search.searchAction4(foodName, startIdx);
  return returnAction4;
}
