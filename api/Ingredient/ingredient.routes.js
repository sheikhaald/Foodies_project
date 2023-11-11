const express = require("express");
const {
  createIngredient,
  getAllIngredient,
  getOneIngredient,
  findIngredient,
  addIngredientToRecipe,
} = require("./ingredient.controllers");
const { findRecipe } = require("../Recipe/recipe.controllers");
const router = express.Router();

router.param("ingID", async (req, res, next, ingID) => {
  const ingredient = await findIngredient(ingID, next);
  req.ingredient = ingredient;
  next();
});
router.param("RecipeId", async (req, res, next, RecipeId) => {
  const recipe = await findRecipe(RecipeId, next);
  req.recipe = recipe;
  next();
});

router.post("/", createIngredient);
router.get("/", getAllIngredient);
router.get("/:ingID", getOneIngredient);
router.put("/:ingID/:RecipeId", addIngredientToRecipe);

module.exports = router;
