const express = require("express");
const {
  getAllCategories,
  addCategory,
  deleteCategory,
  getOneCategory,
  findCategory,
} = require("./category.controllers");
const router = express.Router();

router.param("CategoryId", async (req, res, next, CategoryId) => {
  const category = await findCategory(CategoryId, next);
  req.category = category;
  next();
});

router.get("/", getAllCategories);
router.post("/", addCategory);
router.delete("/:CategoryId", deleteCategory);
router.get("/:CategoryId", getOneCategory);

module.exports = router;
