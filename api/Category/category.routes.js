const express = require("express");
const {
  getAllCategories,
  addCategory,
  deleteCategory,
  getOneCategory,
  findCategory,
  addRecipeToCategory,
} = require("./category.controllers");
const { findRecipe } = require("../Recipe/recipe.controllers");
const upload = require("../../middleware/multer");
const router = express.Router();

router.param("CategoryId", async (req, res, next, CategoryId) => {
  const category = await findCategory(CategoryId, next);
  req.category = category;
  next();
});

router.param("RecipeId", async (req, res, next, RecipeId) => {
  const recipe = await findRecipe(RecipeId, next);
  req.recipe = recipe;
  next();
});
router.post("/", upload.single("image"), addCategory);

router.get("/", getAllCategories);
router.post("/", addCategory);
router.delete("/:CategoryId", deleteCategory);
router.get("/:CategoryId", getOneCategory);
router.put("/:CategoryId/:RecipeId", addRecipeToCategory);

module.exports = router;
