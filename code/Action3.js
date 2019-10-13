module.exports.function = function action3(foodName, bodyName, searchKeyword, request) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  const search = require('./lib/SearchAction.js');
  let startIdx = 1;

  let foodOptions = {
    format: 'json',
    query: {
      foodName: foodName
    }
  };
  let response = http.getUrl(config.get('remote.url') + '/food', foodOptions);
  let data = response;
  let i, checkIdx;
  let infoJudge = new Boolean();
  let returnAction3 = new Object();
  let isFind = false;
  for (i = 0; i < data.length; i++) {
    if (data[i].bodyName == String(bodyName)) {
      isFind = true;
      checkIdx = i;
    }
  }

  returnAction3.foodName = foodName;
  returnAction3.bodyName = bodyName;
  returnAction3.isFind = isFind;

  if (isFind === true) {
    let recipeOptions = {
      format: 'json',
      query: {
        foodName: foodName
      }
    };
    let recipeResponse = http.getUrl(config.get('remote.url') + '/recipe', recipeOptions);
    let recipeArr = new Array();
    let j;
    for (j = 0; j < recipeResponse.length; j++) {
      let recipeObj = new Object();
      recipeObj.recipeURL = recipeResponse[j].recipeUrl;
      recipeObj.recipeName = recipeResponse[j].recipeName;
      recipeObj.recipeImage = recipeResponse[j].recipeImage;
      recipeArr.push(recipeObj);
      delete recipeObj;
    }
    // 문구 수정 필요
    infoJudge=true;
    returnAction3.infoJudge=infoJudge;
    returnAction3.answer = foodName + "는 " + bodyName + "에 좋아요.";
    returnAction3.foodDescription = String(data[checkIdx].foodDescription);
    returnAction3.recipe = recipeArr;
    return returnAction3;
  } else {
    let harmfulOptions = {
      format: 'json',
      query: {
        foodName: foodName,
        bodyName: bodyName
      }
    };
    let harmfulResponse = http.getUrl(config.get('remote.url') + '/harmful', harmfulOptions);
    if (harmfulResponse.length < 1) {
      infoJudge = false;
      let returnAction1 = new Object();
      let returnAction4 = new Object();
      returnAction3.infoJudge = infoJudge;
      returnAction1 = search.searchAction1(bodyName, startIdx);
      returnAction4 = search.searchAction4(foodName, startIdx);

      returnAction3.returnAction1 = returnAction1;
      returnAction3.returnAction4 = returnAction4;
      console.log(search.searchAction1(bodyName, startIdx));
      // 문구 수정필요
      // 1. 블루베리가 좋은 신체부위
      // 2. 블루베리가 안좋은 신체부위
      // 3. 눈에 좋은 음식
      // 4. 눈에 안좋은 음식
      returnAction3.answer = foodName + "과 " + bodyName+"관련 정보를 찾아봤어요.";
      
      return returnAction3;
    } else {
      infoJudge = true;
      returnAction3.infoJudge = infoJudge;
      // 문구 수정필요
      returnAction3.answer = foodName + "은 " + bodyName + "에 좋지않아요";
      returnAction3.foodDescription = String(harmfulResponse[0].description);
      return returnAction3;

    }
  }
}
