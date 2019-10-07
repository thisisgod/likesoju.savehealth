module.exports.function = function action4 (foodName, startIdx) {
  const console = require('console');
  const http = require('http');
  let options = {
    format: 'json',
    query: {
      foodName: foodName
    }
  };
  let response = http.getUrl('http://026fc0b5.ngrok.io/food', options);
  let data = response;
  let returnId = new Array();
  let index = startIdx - 1;
  let returnAction4 = new Array();
  let returnObj = new Object();
  console.log(index);
  let i, j;
  for(i = 0, j = 0; i < data.length; i++){
      if(index>0){
        index--;
        console.log("Check" + index);
        continue;
      }
      returnObj.id = j + startIdx;
      returnObj.bodyName = data[i].bodyName;
      returnObj.foodDiscription = data[i].foodDiscription;
      returnObj.foodName = data[i].foodName;
      console.log(returnObj);
      // returnObj.mainImage = data[i].mainImage;
      // returnObj.recipeUrlOne = data[i].recipeUrlOne;
      // returnObj.recipeUrlTwo = data[i].recipeUrlTwo;
      // returnObj.recipeUrlThree = data[i].recipeUrlThree;
      returnAction4.push(returnObj);
      console.log(returnAction4[i]);
      j++;
      if(j==3)break;
  }
  for(i=0;i<j;i++)returnAction4[i].index=startIdx+j;
  return returnAction4;
}
