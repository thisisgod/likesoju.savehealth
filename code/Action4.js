module.exports.function = function action4(foodName, startIdx) {
  const console = require('console');
  const http = require('http');
  const fakeData = require('./data/fakeData.js');
  // let options = {
  //   format: 'json',
  //   query: {
  //     foodName: foodName
  //   }
  // };
  // let response = http.getUrl('https://3eaee7f7.ngrok.io/food', options);
  // let data = response;
  let data = fakeData;
  let returnId = new Array();
  let index = startIdx - 1;
  let returnAction4 = new Array();

  let i, j = 0;
  for (i = 0; i < data.length; i++) {
    if(data.foodName!=foodName)continue;
    if (index > 0) {
      index--;
      console.log("Check" + index);
      continue;
    }
    // 데이터 값을 받아와서 Obj안에 넣은 후 리턴배열에 푸쉬
    let returnObj = new Object();
    returnObj.id = j + startIdx;
    returnObj.bodyName = data[i].bodyName;
    returnObj.foodDiscription = data[i].foodDiscription;
    returnObj.foodName = data[i].foodName;
    returnObj.recipeURL = [
      data[i].recipeUrlOne,
      data[i].recipeUrlTwo,
      data[i].recipeUrlThree
    ];
    returnObj.recipeName = [
      data[i].recipeNameOne,
      data[i].recipeNameTwo,
      data[i].recipeNameThree,
    ];
    returnObj.recipeImage = [
      data[i].recipeImageOne,
      data[i].recipeImageTwo,
      data[i].recipeImageThree,
    ]
    returnObj.mainImage = data[i].mainImage;
    // returnObj.recipeUrlOne = data[i].recipeUrlOne;
    // returnObj.recipeUrlTwo = data[i].recipeUrlTwo;
    // returnObj.recipeUrlThree = data[i].recipeUrlThree;
    // returnObj.recipeNameOne = data[i].recipeNameOne;
    // returnObj.recipeNameTwo = data[i].recipeNameTwo;
    // returnObj.recipeNameThree = data[i].recipeNameThree;
    // returnObj.recipeImageOne = data[i].recipeImageOne;
    // returnObj.recipeImageTwo = data[i].recipeImageTwo;
    // returnObj.recipeImageThree = data[i].recipeImageThree;

    returnAction4.push(returnObj);
    delete returnObj;
    console.log(returnAction4);
    j++;
    if (j == 3) break;
  }
  for (i = 0; i < j; i++)returnAction4[i].index = startIdx + j;
  return returnAction4;
}
