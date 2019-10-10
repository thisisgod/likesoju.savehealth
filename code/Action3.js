module.exports.function = function action3 (foodName, bodyName) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  // const fakeData = require('./data/fakeData.js');
  let foodOptions = {
    format: 'json',
    query: {
      foodName: foodName
    }
  };
  let response = http.getUrl(config.get('remote.url') + '/food', foodOptions);
  let data = response;
  let i,checkIdx;
  let returnAction3 = new Object();
  let isFind = false;
  for(i=0; i<data.length; i++){
    if(data[i].bodyName == String(bodyName)){
      isFind = true;
      checkIdx = i;
    }
  }
  console.log(data[checkIdx].foodDescription);
  if(isFind === true){
    let recipeOptions = {
    format: 'json',
    query: {
      foodName: foodName
      }
    };
    let recipeResponse = http.getUrl(config.get('remote.url') + '/recipe', foodOptions);
    let recipeArr = new Array();
    let j;
    for(j=0; j<recipeResponse.length; j++){
      let recipeObj = new Object();
      recipeObj.recipeURL = recipeResponse[j].recipeUrl;
      recipeObj.recipeName = recipeResponse[j].recipeName;
      recipeObj.recipeImage = recipeResponse[j].recipeImage;
      console.log(recipeObj);
      recipeArr.push(recipeObj);
      delete recipeObj;
    }
    returnAction3.foodName = foodName;
    returnAction3.bodyName = bodyName;
    returnAction3.isFind = isFind;
    returnAction3.answer = foodName + "는 " + bodyName + "에 좋아요.";
    returnAction3.foodDescription = String(data[checkIdx].foodDescription);
    returnAction3.recipe = recipeArr;
    return returnAction3;
  }
}