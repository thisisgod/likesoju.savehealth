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
  let index = startIdx - 1;
  let harmful = false;
  let returnAction1 = new Array();
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
  }exports.searchAction1 = function (bodyName, startIdx) {
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
  let index = startIdx - 1;
  let harmful = false;
  let returnAction1 = new Array();
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
  let response = http.getUrl(config.get('remote.url') + '/food', options);
  let data = response;
  let index = startIdx - 1;
  let harmful = false;
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
    returnObj.harmful = harmful;

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
  let index = startIdx - 1;
  let returnAction1 = new Array();
  let harmful = true;
  let i, j = 0;

  for (i = 0; i < data.length; i++) {
    let returnObj = new Object();
    returnObj.id = j + startIdx;
    returnObj.bodyName = data[i].bodyName;
    returnObj.foodDescription = data[i].foodDescription;
    returnObj.foodName = data[i].foodName;
    returnObj.harmful = harmful;
    returnObj.mainImage = data[i].mainImage;
    returnAction1.push(returnObj);
    delete returnObj;
    j++;
    if (j == 3) break;
  }
  for (i = 0; i < j; i++)returnAction1[i].index = startIdx + j;
  console.log(returnAction1);
  return returnAction1;

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
  let index = startIdx - 1;
  let returnAction4 = new Array();
  let harmful = true;
  let i, j = 0;

  for (i = 0; i < data.length; i++) {
    let returnObj = new Object();
    returnObj.id = j + startIdx;
    returnObj.bodyName = data[i].bodyName;
    returnObj.foodName = data[i].foodName;
    returnObj.harmful = harmful;
    returnObj.foodDescription = data[i].foodDescription;
    returnAction4.push(returnObj);
    delete returnObj;
    j++;
    if (j == 3) break;
  }
  for (i = 0; i < j; i++)returnAction4[i].index = startIdx + j;
  console.log(returnAction4);
  return returnAction4;
}

  for (i = 0; i < j; i++)returnAction1[i].index = startIdx + j;
  console.log(returnAction1);
  return returnAction1;
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
  let response = http.getUrl(config.get('remote.url') + '/food', options);
  let data = response;
  let index = startIdx - 1;
  let harmful = false;
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
    returnObj.harmful = harmful;

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
  let index = startIdx - 1;
  let returnAction1 = new Array();
  let harmful = true;
  let i, j = 0;

  for (i = 0; i < data.length; i++) {
    let returnObj = new Object();
    returnObj.id = j + startIdx;
    returnObj.bodyName = data[i].bodyName;
    returnObj.foodDescription = data[i].foodDescription;
    returnObj.foodName = data[i].foodName;
    returnObj.harmful = harmful;
    returnObj.mainImage = data[i].mainImage;
    returnAction1.push(returnObj);
    delete returnObj;
    j++;
    if (j == 3) break;
  }
  for (i = 0; i < j; i++)returnAction1[i].index = startIdx + j;
  console.log(returnAction1);
  return returnAction1;

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
  let index = startIdx - 1;
  let returnAction4 = new Array();
  let harmful = true;
  let i, j = 0;

  for (i = 0; i < data.length; i++) {
    let returnObj = new Object();
    returnObj.id = j + startIdx;
    returnObj.bodyName = data[i].bodyName;
    returnObj.foodDescription = data[i].foodDescription;
    returnObj.foodName = data[i].foodName;
    returnObj.harmful = harmful;
    returnAction4.push(returnObj);
    delete returnObj;
    j++;
    if (j == 3) break;
  }
  for (i = 0; i < j; i++)returnAction4[i].index = startIdx + j;
  console.log(returnAction4);
  return returnAction4;
}
