module.exports.function = function action4 (foodName, startIdx) {
  const console = require('console');
  const fakeData = require('./data/Action4Data.js');
  let returnId = new Array();
  let index = startIdx - 1;
  let returnAction4 = new Array();
  console.log(index);
  let i, j;
  for(i = 0, j = 0; i < fakeData.length; i++){
    if(fakeData[i].foodName==String(foodName)){
      if(index>0){
        index--;
        console.log("Check" + index);
        console.log(fakeData[i].bodyName);
        continue;
      }
      returnAction4[j] = fakeData[i];
      returnAction4[j].id=j + startIdx;
      j++;
      if(j==3)break;
    }
  }
  for(i=0;i<j;i++)returnAction4[i].index=startIdx+j;
  return returnAction4;
}
