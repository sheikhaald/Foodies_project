const Ingredient = require("../../models/Ingredient");

exports.findIngredient = async (ingID, next) => {
  try {
    const ingredient = await Ingredient.findById(ingID);
    if (ingredient) return ingredient;
    next({ message: "No such ingredient You can create new one", status: 404 });
  } catch (error) {
    next(error);
  }
};

exports.getAllIngredient = async (req, res, next) => {
  try {
    const getALL = await Ingredient.find();
    res.status(200).json(getALL);
  } catch (error) {
    next(error);
  }
};

exports.getOneIngredient = async (req, res, next) => {
  try {
    const ingredient = await req.ingredient;
    res.status(200).json(ingredient);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};

exports.addIngredientToRecipe = async (req, res, next) => {
  try {
    await req.ingredient.updateOne({ $push: { recipies: req.recipe } });
    await req.recipe.updateOne({ $push: { ingredients: req.ingredient } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
