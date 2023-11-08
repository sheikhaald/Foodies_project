const express = require("express");
const {
  createIngredient,
  getALLingredient,
  getOneingredient,
  findIngredient,
} = require("./ingredient.controllers");
const router = express.Router();

router.param("ingID", async (req, res, next, ingID) => {
  const ingredient = await findIngredient(ingID, next);
  req.ingredient = ingredient;
  next();
});
router.post("/", createIngredient);
router.get("/", getALLingredient);
router.get("/:ingID", getOneingredient);

module.exports = router;
