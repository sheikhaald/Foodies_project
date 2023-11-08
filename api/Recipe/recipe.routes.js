const express = require("express");
const {
  getAllRecipes,
  CreateNewRecipe,
  UpdateRecipe,
  DeleteRecipe,
  findRecipe,
} = require("./recipe.controllers");
const router = express.Router();

router.param("RecipeId", async (req, res, next, RecipeId) => {
  const recipe = await findRecipe(RecipeId, next);
  req.recipe = recipe;
  next();
});

router.get("/", getAllRecipes);
router.post("/", CreateNewRecipe);
router.put("/:RecipeId", UpdateRecipe);
router.delete("/:RecipeId", DeleteRecipe);

module.exports = router;
