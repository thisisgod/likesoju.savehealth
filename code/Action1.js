module.exports.function = function action1(bodyName, startIdx, request) {
  let returnAction1 = new Object(); 
  const search = require('./lib/SearchAction.js');
  returnAction1 = search.searchAction1(bodyName, startIdx);
  return returnAction1;
}
