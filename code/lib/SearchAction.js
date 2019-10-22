exports.searchAction1 = function (bodyName, startIdx) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  let options = {
    format: 'json',
    query: {
      bodyName: bodyName
    }
  };
  let response = http.getUrl(config.get('remote.url') + '/food', options);

  let data = response;
  let isFind = false;
  console.log(isFind);
  let returnAction1 = new Array();
  if (response.length < 1) {
    let returnObj = new Object();
    isFind = false;
    returnObj.id = 1;
    returnObj.index = 1;
    returnObj.bodyName = bodyName;
    returnObj.foodName = foodName + "에 대한 정보가 없어요";
    returnObj.isFind = isFind;
    returnAction1.push(returnObj);
    console.log(returnAction1);
    return returnAction1;
  }
  else {
    isFind = true
    let index = startIdx - 1;
    let harmful = false;
    let i, j = 0, k = 0;

    for (i = 0; i < data.length; i++) {
      let returnObj = new Object();
      let recipeArr = new Array();
      returnObj.id = j + startIdx;
      returnObj.bodyName = data[i].bodyName;
      returnObj.foodDescription = data[i].foodDescription;
      returnObj.foodName = data[i].foodName;
      returnObj.mainImage = data[i].mainImage;
      returnObj.isFind = isFind;
      returnObj.harmful = harmful;
      let recipeOptions = {
        format: 'json',
        query: {
          foodName: returnObj.foodName
        }
      };
      let recipeResponse = http.getUrl(config.get('remote.url') + '/recipe', recipeOptions);
      for (k = 0; k < recipeResponse.length; k++) {
        let recipeObj = new Object();
        recipeObj.recipeURL = recipeResponse[k].recipeUrl;
        recipeObj.recipeName = recipeResponse[k].recipeName;
        recipeObj.recipeImage = recipeResponse[k].recipeImage;
        recipeArr.push(recipeObj);
        delete recipeObj;
      }
      returnObj.recipe = recipeArr;
      returnAction1.push(returnObj);
      delete returnObj;
      delete recipeArr
      j++;
      if (j == 3) break;
    }
    for (i = 0; i < j; i++)returnAction1[i].index = startIdx + j;
    console.log(returnAction1);
    return returnAction1;
  }
}
// ---------------------------------------------------------------------------------------------------
exports.searchAction4 = function (foodName, startIdx) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  let options = {
    format: 'json',
    query: {
      foodName: foodName
    }
  };
  let isFind = new Boolean();
  let returnAction4 = new Array();
  let response = http.getUrl(config.get('remote.url') + '/food', options);
  let data = response;
  if (response.length < 1) {
    isFind = false;
    let returnObj = new Object();
    returnObj.id = 1;
    returnObj.bodyName = foodName + "에 대한 정보가 없어요";
    returnObj.foodName = foodName;
    returnObj.index = 1;
    returnObj.isFind = isFind;
    returnAction4.push(returnObj);
    console.log(returnAction4);
    return returnAction4;
  }
  else {
    isFind = true;
    let index = startIdx - 1;
    let harmful = false;
    let i, j = 0, k = 0;

    for (i = 0; i < data.length; i++) {
      let returnObj = new Object();
      let recipeArr = new Array();
      returnObj.id = j + startIdx;
      returnObj.bodyName = data[i].bodyName;
      returnObj.foodDescription = data[i].foodDescription;
      returnObj.foodName = data[i].foodName;
      returnObj.mainImage = data[i].mainImage;
      returnObj.harmful = harmful;
      returnObj.isFind = isFind;

      let recipeOptions = {
        format: 'json',
        query: {
          foodName: foodName
        }
      };
      let recipeResponse = http.getUrl(config.get('remote.url') + '/recipe', options);
      for (k = 0; k < recipeResponse.length; k++) {
        let recipeObj = new Object();
        recipeObj.recipeURL = recipeResponse[k].recipeUrl;
        recipeObj.recipeName = recipeResponse[k].recipeName;
        recipeObj.recipeImage = recipeResponse[k].recipeImage;
        recipeArr.push(recipeObj);
        delete recipeObj;
      }
      returnObj.recipe = recipeArr;
      returnAction4.push(returnObj);
      delete returnObj;
      delete recipeArr
      j++;
      if (j == 3) break;
    }
    for (i = 0; i < j; i++)returnAction4[i].index = startIdx + j;
    console.log(returnAction4);
    return returnAction4;
  }
}
exports.searchAction1_harmful = function (bodyName, startIdx) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  let options = {
    format: 'json',
    query: {
      bodyName: bodyName
    }
  };
  let response = http.getUrl(config.get('remote.url') + '/harmful', options);
  let data = response;
  let returnAction1 = new Array();
  let harmful = true;
  if (response.length < 1) {
    let returnObj = new Object();
    isFind = false;
    returnObj.id = 1;
    returnObj.index = 1;
    returnObj.bodyName = bodyName;
    returnObj.foodName = bodyName + "에 대한 정보가 없어요";
    returnObj.isFind = isFind;
    console.log("isFind == " + returnObj.isFind);
    returnAction1.push(returnObj);
    console.log(returnAction1);
    return returnAction1;
  }
  else {
    let index = startIdx - 1;
    let i, j = 0;
    isFind = true;

    for (i = 0; i < data.length; i++) {
      let returnObj = new Object();
      returnObj.id = j + startIdx;
      returnObj.bodyName = data[i].bodyName;
      returnObj.foodDescription = data[i].foodDescription;
      returnObj.foodName = data[i].foodName;
      returnObj.harmful = harmful;
      returnObj.mainImage = data[i].mainImage;
      returnObj.isFind = isFind;
      returnAction1.push(returnObj);
      delete returnObj;
      j++;
      if (j == 3) break;
    }
    for (i = 0; i < j; i++)returnAction1[i].index = startIdx + j;
    console.log(returnAction1);
    return returnAction1;

  }
}
exports.searchAction4_harmful = function (foodName, startIdx) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  let options = {
    format: 'json',
    query: {
      foodName: foodName
    }
  };
  let response = http.getUrl(config.get('remote.url') + '/harmful', options);
  let data = response;
  let returnAction4 = new Array();
  let harmful = true;
  if (response.length < 1) {
    isFind = false;
    let returnObj = new Object();
    returnObj.id = 1;
    returnObj.bodyName = foodName + "에 대한 정보가 없어요";
    returnObj.foodName = foodName;
    returnObj.index = 1;
    returnObj.isFind = isFind;
    returnAction4.push(returnObj);
    console.log(returnAction4);
    return returnAction4;
  }
  else {
    let index = startIdx - 1;
    let i, j = 0;
    isFind = true;
    for (i = 0; i < data.length; i++) {
      let returnObj = new Object();
      returnObj.id = j + startIdx;
      returnObj.bodyName = data[i].bodyName;
      returnObj.foodDescription = data[i].foodDescription;
      returnObj.foodName = data[i].foodName;
      returnObj.mainImage = data[i].mainImage;
      returnObj.harmful = harmful;
      returnObj.isFind = isFind
      returnAction4.push(returnObj);
      delete returnObj;
      j++;
      if (j == 3) break;
    }
    for (i = 0; i < j; i++)returnAction4[i].index = startIdx + j;
    console.log(returnAction4);
    return returnAction4;
  }
}