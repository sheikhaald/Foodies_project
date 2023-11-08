const express = require("express");
const {
  createIngredient,
  getALLingredient,
  getOneingredient,
  findIngredient,
  addIngredientToRecipe,
} = require("./ingredient.controllers");
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
router.get("/", getALLingredient);
router.get("/:ingID", getOneingredient);
router.put("/:ingID/:RecipeId", addIngredientToRecipe);

module.exports = router;
