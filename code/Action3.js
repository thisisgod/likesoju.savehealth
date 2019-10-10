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

  returnAction3.foodName = foodName;
  returnAction3.bodyName = bodyName;
  returnAction3.isFind = isFind;

  if(isFind === true){
    let recipeOptions = {
    format: 'json',
    query: {
      foodName: foodName
      }
    };
    let recipeResponse = http.getUrl(config.get('remote.url') + '/recipe', recipeOptions);
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
    returnAction3.answer = foodName + "는 " + bodyName + "에 좋아요.";
    returnAction3.foodDescription = String(data[checkIdx].foodDescription);
    returnAction3.recipe = recipeArr;
    return returnAction3;
  }else{
    let harmfulOptions = {
    format: 'json',
    query: {
      foodName: foodName,
      bodyName: bodyName
      }
    };
    let harmfulResponse = http.getUrl(config.get('remote.url') + '/harmful', harmfulOptions);
    if(harmfulResponse.length < 1){
      console.log("관련정보 찾지못함");
      returnAction3.answer = "관련 정보를 찾지 못했어요.";
      return returnAction3;
    }else{
      returnAction3.foodDescription = String(harmfulResponse[0].description);
      
    }
  }
}