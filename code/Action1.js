module.exports.function = function action4(bodyName, startIdx, request) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  // const fakeData = require('./data/fakeData.js');
  let options = {
    format: 'json',
    query: {
      bodyName: bodyName,
      type: "food"
    }
  };
  let response = http.getUrl(config.get('remote.url') + '/food', options);

  let data = response;
  // let data = fakeData;
  let index = startIdx - 1;
  let returnAction4 = new Array();
  let i, j = 0, k = 0;

  for (i = 0; i < data.length; i++) {
    let returnObj = new Object();
    let recipeArr = new Array();
    returnObj.id = j + startIdx;
    returnObj.bodyName = data[i].bodyName;
    returnObj.foodDescription = data[i].foodDescription;
    returnObj.foodName = data[i].foodName;
    returnObj.mainImage = data[i].mainImage;
    let recipeOptions = {
    format: 'json',
    query: {
        foodName: returnObj.foodName,
        type: "food"
      }
    };
    let recipeResponse = http.getUrl(config.get('remote.url') + '/recipe', recipeOptions);
    for(k=0; k<recipeResponse.length; k++){
      let recipeObj = new Object();
      recipeObj.recipeURL = recipeResponse[k].recipeUrl;
      recipeObj.recipeName = recipeResponse[k].recipeName;
      recipeObj.recipeImage = recipeResponse[k].recipeImage;
      recipeArr.push(recipeObj);
      delete recipeObj;
    }
    returnObj.recipe = recipeArr;
    console.log(recipeArr);
    returnAction4.push(returnObj);
    delete returnObj;
    delete recipeArr
    console.log(returnAction4);
    j++;
    if (j == 3) break;
  }
  for (i = 0; i < j; i++)returnAction4[i].index = startIdx + j;
  return returnAction4;
}
