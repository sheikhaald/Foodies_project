const express = require("express");
const {
  getAllRecipes,
  createNewRecipe,
  updateRecipe,
  deleteRecipe,
  findRecipe,
  getOneRecipe,
  getRecipesByCategory,
} = require("./recipe.controllers");
const upload = require("../../middleware/multer");
const router = express.Router();

router.param("RecipeId", async (req, res, next, RecipeId) => {
  const recipe = await findRecipe(RecipeId, next);
  req.recipe = recipe;
  next();
});

router.get("/", getAllRecipes);
router.post("/", upload.single("image"), createNewRecipe);
router.put("/:RecipeId", updateRecipe);
router.delete("/:RecipeId", deleteRecipe);
router.get("/:RecipeId", getOneRecipe);
router.get("/recipes/:catigoryId", getRecipesByCategory);

module.exports = router;
