module.exports.function = function action4(bodyName, startIdx, request) {
  let returnAction4 = new Object(); 
  const search = require('./lib/SearchAction.js');
  returnAction4 = search.searchAction4(bodyName, startIdx, request);
  return returnAction4;
}
