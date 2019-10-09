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
  let i;
  let returnAction3 = new Object();
  let isFind = false;
  for(i=0; i<data.length; i++){
    if(data[i].bodyName == String(bodyName)){
      isFind = true;
      break;
    }
  }
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
      recipeObj = {
        recipeUrl: recipeResponse.recipeUrl,
        recipeName: recipeResponse.recipeName,
        recipeImage: recipeResponse.recipeImage
      }
      recipeArr.push(recipeObj);
      delete recipeObj;
    }
    returnAction3 = {
      foodName: foodName,
      bodyName: bodyName,
      isFind: isFind,
      foodDescription: data.foodDescription,
      recipe: recipeArr
    }
    console.log(returnAction3);
    return returnAction3;
  }
}