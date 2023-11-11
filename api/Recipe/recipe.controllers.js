const Recipe = require("../../models/Recipe");

exports.findRecipe = async (RecipeId, next) => {
  try {
    const recipe = await Recipe.findById(RecipeId);
    if (recipe) return recipe;
    next({ message: "Recipe not found", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

exports.createNewRecipe = async (req, res, next) => {
  try {
    const NewRecipe = await Recipe.create(req.body);
    res.status(200).json(NewRecipe);
  } catch (error) {
    next(error);
  }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    await req.recipe.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deleteRecipe = async (req, res, next) => {
  try {
    await req.recipe.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneRecipe = async (req, res, next) => {
  try {
    const recipe = await req.recipe;
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};
