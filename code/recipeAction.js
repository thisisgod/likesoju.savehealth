module.exports.function = function recipeAction(foodName, request) {
  const console = require('console');
  const config = require('config');
  const http = require('http');
  let recipe = new Array();
  let k;
  let recipeOptions = {
    format: 'json',
    query: {
      foodName: foodName
    }
  };
  let recipeResponse = http.getUrl(config.get('remote.url') + '/recipe', recipeOptions);
  for (k = 0; k < recipeResponse.length; k++) {
    let recipeObj = new Object();
    recipeObj.foodName = foodName;
    recipeObj.recipeURL = recipeResponse[k].recipeUrl;
    recipeObj.recipeName = recipeResponse[k].recipeName;
    recipeObj.recipeImage = recipeResponse[k].recipeImage;
    recipe.push(recipeObj);
    delete recipeObj;
  }
  console.log(recipe);
  return recipe;
}
